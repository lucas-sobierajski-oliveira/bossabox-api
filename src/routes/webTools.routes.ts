import { Router, Response, Request } from 'express';

import CreateWebToolsService from '../services/CreateWebToolsService';
import FindWebToolsByTagService from '../services/FindWebToolsByTagService';
import WebTool from '../models/WebTool';

const webToolsRoutes = Router();

webToolsRoutes.get('/', async (request: Request, response: Response) => {
  const { tag } = request.query;
  const findWebToolByTag = new FindWebToolsByTagService();
  const allWebTools = await findWebToolByTag.execute(tag as string);

  return response.send(allWebTools);
});

webToolsRoutes.post('/', async (request: Request, response: Response) => {
  const { title, link, description, tags } = request.body;
  const createWebTools = new CreateWebToolsService();
  const webTool: WebTool = await createWebTools.execute({
    title,
    link,
    description,
    tags,
  });

  // conferir se foi criado com sucesso(201)
  return response.send(webTool);
});

webToolsRoutes.delete('/:id', (request: Request, response: Response) => {
  const { id } = request.params;
  return response.send(id);
});

export default webToolsRoutes;
