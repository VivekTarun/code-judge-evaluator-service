import express from 'express';

import { pingcheck } from '../../controllers/pingController';

const v1Router = express.Router();

v1Router.get('/ping', pingcheck);

export default v1Router;