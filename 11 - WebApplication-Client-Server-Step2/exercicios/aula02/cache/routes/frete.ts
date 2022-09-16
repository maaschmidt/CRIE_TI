const router = require('express').Router();
import * as freteController from '../controllers/FreteController';

router.get('/', freteController.index);

router.post('/frete', freteController.create);

module.exports = router;
