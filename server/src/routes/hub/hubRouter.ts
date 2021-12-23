import express from 'express';
import hubController from '../../controllers/hub/hubController';

const hubRouter = express.Router();

hubRouter.get('/', hubController.getHub);

export default hubRouter;
