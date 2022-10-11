import express, { Express, NextFunction, Request, Response } from 'express';
import { State } from '../models/State';

export class StatesController {

  static index = async (req: Request, res: Response, next: NextFunction) => {
    const states = await State.findAll({});
    res.json(states);
  }

  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body);
      const state = await State.create(data);
      res.json(state);
    } catch (error) {
      res.status(400).json({ error: Error });
    }
  }

  static show = async (req: Request, res: Response, next: NextFunction) => {
    const state = await State.findByPk(req.params.stateId);
    res.json(state);
  }

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: any = req.params.stateId;
      const data: any = await this._validateData(req.body);
      await State.update(data, {
        where: {
          id: id
        }
      });
      res.json(await State.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: Error });
    }
  }

  static delete = async (req: Request, res: Response, next: NextFunction) => {
    await State.destroy({
      where: {
        id: req.params.stateId
      }
    });
    res.json({});
  }

  static _validateData = async (data: any) => {
    const attributes = ['name', 'province'];
    const state: any = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      state[attribute] = data[attribute];
    }

    return state;
  }

}
