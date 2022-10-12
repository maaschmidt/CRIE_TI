import cors from 'cors';
import express from 'express';
import users from './users';
import login from './login';
import states from './states';
import cities from './cities';

const router = express.Router();
router.use(cors());

router.use(login);
router.use(users);
router.use(states);
router.use(cities);

export default router;
