import { Op } from 'sequelize';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/User';
import puppeteer from 'puppeteer';

class UsersController {

  index = async (req: Request, res: Response) => {
    const params = req.query;
    const limit: number = parseInt(params.limit as string) || 100;
    const page: number = parseInt(params.page as string) || 1;
    const offset: number = (page - 1) * limit;
    const sort: any = params.sort || 'id';
    const order: any = params.order || 'ASC';
    const where: any = {};

    if (params.name) {
      where.name =
      {
        [Op.iLike]: `%${params.name}%`
      };
    }

    if (params.email) {
      where.email =
      {
        [Op.iLike]: `%${params.email}%`
      };
    }

    if (params.min_age) {
      where.age =
      {
        [Op.gte]: params.min_age
      };
    }

    if (params.max_age) {
      if (!where.age) {
        where.age = {};
      }

      where.age[Op.lte] = params.max_age;
    }

    if (params.sex) {
      where.sex = params.sex;
    }

    const users = await UserModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]]
    });
    res.json(users);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body);
      const user = await UserModel.create(data);
      res.json(user);
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  show = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findByPk(req.params.userId);
    res.json(user);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.userId;
      const data = await this._validateData(req.body, id);
      await UserModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await UserModel.findByPk(id));
    }
    catch (error: any) {
      res.status(400).json({ error: error.message + "" });
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await UserModel.destroy({
      where: {
        id: req.params.userId
      }
    });
    res.json({});
  }



  _validateData = async (data: any, id?: any) => {
    const attributes = ['name', 'age', 'gender', 'email', 'password'];
    const user: any = {};

    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }

      user[attribute] = data[attribute];
    }

    if (await this._checkIfEmailExists(user.email, id)) {
      throw new Error(`The user with mail address "${user.email}" already exists.`);
    }

    return user;
  }

  _checkIfEmailExists = async (email: string, id?: string) => {
    const where: any =
    {
      email: email
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await UserModel.count({
      where: where
    });

    return count > 0;
  }

  generatePDF = async (req: Request, res: Response) => {
    const users = await UserModel.findAll()

    let html = ``

    html += '<h1 style="text-align: center;">Relatório de Usuários</h1>'
    html += '<table border="1" style="width: 100%;">'
    html += '<thead>'
    html += '<tr>'
    html += '<th>#</th>'
    html += '<th>Name</th>'
    html += '<th>Gender</th>'
    html += '<th>Age</th>'
    html += '<th>Email</th>'
    html += '</tr>'
    html += '</thead>'

    html += '<tbody>'

    for (const user of users) {
      html += '<tr>'

      const values = user.getDataValue;

      html += '<td>${values.id}</td>'
      html += '<td>${values.name}</td>'
      html += '<td>${values.gender}</td>'
      html += '<td>${values.age}</td>'
      html += '<td>${values.email}</td>'

      html += '</tr>'
    }

    html += '</tbody>'
    html += '</table>'

    const options = {
      type: 'pdf',
      format: 'A4',
      orientation: 'portrait'
    }

    // Criar uma nova instância de browser
    const browser = await puppeteer.launch();

    // Criar uma nova página
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    // Para refletir o CSS usado para telas em vez de imprimir
    await page.emulateMediaType('screen');

    // Transformar para PDF
    const pdf = await page.pdf();

    // Fecha a instância do navegador
    await browser.close();

    // Enviar o PDF na resposta
    res.end(pdf);
  }
}

export default new UsersController();