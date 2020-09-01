import { getRepository } from 'typeorm';

import WebTool from '../models/WebTool';

interface IRequest {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

class CreateWebToolsService {
  public async execute({
    description,
    link,
    tags,
    title,
  }: IRequest): Promise<WebTool> {
    const webToolRepository = getRepository(WebTool);

    const webTool = await webToolRepository.create({
      description,
      link,
      tags,
      title,
    });

    await webToolRepository.save(webTool);

    return webTool;
  }
}

export default CreateWebToolsService;
