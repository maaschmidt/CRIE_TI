require("dotenv").config();
const { Op } = require('sequelize');
const Event = require('../models/Event')
const axios = require("axios");
FERIADOS_API_URL = process.env.FERIADOS_API_URL;

class EventsController {

  index = async (req, res, next) => {
    const params = req.query;
    const limit = params.limit || 10;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.title) {
      where.title = {
        [Op.iLike]: `%${params.title}`
      }
    }

    if (params.date) {
      where.date = params.date
    }

    if (params.modality) {
      where.modality = {
        [Op.iLike]: `%${params.modality}%`
      }
    }

    if (params.location) {
      where.location = {
        [Op.iLike]: `%${params.location}%`
      }
    }

    if (params.min_price) {
      where.ticket_value = {
        [Op.gte]: params.min_price
      }
    }

    if (params.max_price) {
      if (!where.ticket_value) {
        where.ticket_value = {}
      }
      where.ticket_value[Op.lte] = params.max_price;
    }

    const event = await Event.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]]
    });

    res.json(event);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const event = await Event.create(data);
      res.json(event);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const event = await Event.findByPk(req.params.eventId);
    res.json(event);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.eventId;
      const data = await this._validateData(req.body, id);
      await Event.update(data, {
        where: {
          id: id
        }
      });
      res.json(await Event.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await Event.destroy({
      where: {
        id: req.params.eventId
      }
    });
    res.json({});
  }

  _validateData = async (data) => {
    const notNullAttributes = ['title', 'date', 'end_date', 'modality', 'holiday'];
    const attributes = ['title', 'description', 'date', 'end_date', 'modality', 'location', 'ticket_value', 'min_members', 'max_members', 'holiday'];
    let event = {};
    data.holiday = "false";

    const feriados = await axios.get('https://brasilapi.com.br/api/feriados/v1/' + data.date.slice(0, 4));
    for (const feriado of feriados.data) {
      if (data.date.slice(0, 10) == feriado.date) {
        data.holiday = true;
      }
    }

    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute ${attribute} is required.`);
      }
      event[attribute] = data[attribute];
    };
    for (const attribute of notNullAttributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute ${attribute} is required.`);
      }
    };
    return event;
  };

  _validateEventId = async (req, res, next) => {
    const event = await Event.find(req.params.eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' })
    }
    next();
  }
}

module.exports = new EventsController();