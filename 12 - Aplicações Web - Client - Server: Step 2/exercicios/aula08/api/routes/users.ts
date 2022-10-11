import express, { Express, NextFunction, Request, Response } from 'express';
const router = express.Router();
import { User } from '../models/User';
import { UsersController } from '../controllers/UsersController';

const validateUserId = async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findByPk(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/users', UsersController.index);

router.post('/users', UsersController.create);

router.get('/users/:userId', validateUserId, UsersController.show);

router.put('/users/:userId', validateUserId, UsersController.update);

router.delete('/users/:userId', validateUserId, UsersController.delete);

export default router;
