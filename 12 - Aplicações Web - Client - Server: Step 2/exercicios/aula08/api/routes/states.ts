import express, { Express, NextFunction, Request, Response } from 'express';
const router = express.Router();
import { State } from '../models/State';
import { StatesController } from '../controllers/StatesController';

const validateStateId = async (req: Request, res: Response, next: NextFunction) => {
    const state = await State.findByPk(req.params.stateId);
    if (!state) {
        return res.status(404).json({ error: 'State not found' });
    }
    next();
}

router.post('/states', StatesController.create);

router.get('/states', StatesController.index);

router.get('/states/:stateId', validateStateId, StatesController.show);

router.put('/states/:stateId', validateStateId, StatesController.update);

router.delete('/states/:stateId', validateStateId, StatesController.delete);

export default router;
