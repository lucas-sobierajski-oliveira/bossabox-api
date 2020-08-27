import { Router } from 'express';
import webToolsRoutes from './webTools.routes';

const routes = Router();

routes.use('/tools', webToolsRoutes);
// tratamento de saida de erros

export default routes;
