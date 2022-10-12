import express, { Express, NextFunction, Request, Response } from 'express';
const router = express.Router()
import City from '../models/City';
import CitiesController from '../controllers/CitiesController';

const validateCityId = async (req: Request, res: Response, next: NextFunction) => {
    const city = await City.findByPk(req.params.cityId);
    if (!city) {
        return res.status(404).json({ error: 'City not found' });
    }
    next();
}

router.post('/cities', CitiesController.create);

router.get('/cities', CitiesController.index);

router.get('/cities/:cityId', validateCityId, CitiesController.show);

router.put('/cities/:cityId', validateCityId, CitiesController.update);

router.delete('/cities/:cityId', validateCityId, CitiesController.delete);

export default router;
