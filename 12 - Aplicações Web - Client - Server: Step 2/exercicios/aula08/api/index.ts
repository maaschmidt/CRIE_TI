import express, { Express, NextFunction, Request, Response } from 'express';
import { User } from '../api/models/User';
import routes from '../api/routes';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  next();
});

app.use(routes);
app.use((req, res, next) =>
{
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});
