import { getRepository } from 'typeorm';

import WebTool from '../models/WebTool';

class FindWebToolsByTagService {
  public async execute(tag: string): Promise<WebTool[]> {
    const repository = getRepository(WebTool);
    const allWebTools: WebTool[] = await repository
      .createQueryBuilder('categories')
      .where(':tag = ANY(categories.tags)', { tag })
      .getMany();

    return allWebTools;
  }
}

export default FindWebToolsByTagService;
