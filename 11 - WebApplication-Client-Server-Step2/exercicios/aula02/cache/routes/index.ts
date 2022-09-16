import * as cors from 'cors';
// import * as express from 'express';
// import { Router } from 'express';
const router = require('express').Router();
import * as frete from './frete';

router.use(cors())

router.use(frete);

module.exports = router;
