import { Entity } from 'typeorm';

@Entity('web_tools')
class WebTools {
  id: number;

  title: string;

  link: string;

  description: string;

  tags: string[];
}

export default WebTools;
