import express, { Express, NextFunction, Request, Response } from 'express';
import { INTEGER, Op } from 'sequelize';
import { User } from '../models/User'

export class UsersController {

  static index = async (req: Request, res: Response, next: NextFunction) => {
    const params = req.query;
    const limit: any = params.limit || 100;
    const page: any = params.page || 1;
    const offset = (page - 1) * limit;
    const sort: any = params.sort || 'id';
    const order: any = params.order || 'ASC';
    const where: any = {};

    if (params.name) {
      where.name = {
        [Op.iLike]: `%${params.name}%`
      };
    }

    if (params.email) {
      where.email = {
        [Op.iLike]: `%${params.email}%`
      };
    }

    if (params.min_age) {
      where.age = {
        [Op.gte]: params.min_age
      };
    }

    if (params.max_age) {
      if (! where.age) {
        where.age = {};
      }
      where.age[Op.lte] = params.max_age;
    }

    if (params.sex) {
      where.sex = params.sex;
    }

    const users = await User.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [ [sort, order] ]
    });
    res.json(users);
  }

  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body, 0);
      const user = await User.create(data);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: Error });
    }
  }

  static show = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByPk(req.params.userId);
    res.json(user);
  }

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: any = parseInt(req.params.userId);
      const data = await this._validateData(req.body, id);
      await User.update(data, {
        where: {
          id: id
        }
      });
      res.json(await User.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: Error });
    }
  }

  static delete = async (req: Request, res: Response, next: NextFunction) => {
    await User.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.json({});
  }

  static _validateData = async (data: any, id: Number) => {
    const attributes = ['name', 'age', 'sex', 'email'];
    const user: any = {};
    for (const attribute of attributes) {
      if (! data[attribute]){
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      user[attribute] = data[attribute];
    }

    if (await this._checkIfEmailExists(user.email, id)) {
      throw new Error(`The user with mail address "${user.email}" already exists.`);
    }

    return user;
  }

  static _checkIfEmailExists = async (email: string, id: Number) => {
    const where: any = {
      email: email
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await User.count({
      where: where
    });

    return count > 0;
  }

}
