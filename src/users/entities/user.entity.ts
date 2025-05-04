import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Fábio Moura dos Santos' })
  @Column()
  name: string;

  @ApiProperty({ example: 'fabio@empresa.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'senha123' })
  @Column()
  password: string;

  @ApiProperty({ example: 'admin', description: 'admin, operador, gerente...' })
  @Column({ default: 'operador' })
  role: string;

  @ApiProperty({ example: '2025-05-04T14:00:00.000Z' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ example: '2025-05-04T14:05:00.000Z' })
  @UpdateDateColumn()
  updatedAt: Date;
}
