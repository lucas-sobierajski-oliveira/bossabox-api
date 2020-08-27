import { Router, Response, Request } from 'express';

const webToolsRoutes = Router();

webToolsRoutes.get('/', (request: Request, response: Response) =>
  response.send('tools'),
);

export default webToolsRoutes;
