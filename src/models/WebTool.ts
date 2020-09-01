/* eslint-disable camelcase */
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('web_tools')
class WebTool {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  link: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  tags: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default WebTool;
