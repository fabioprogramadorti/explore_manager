// src/destinations/entities/destination.entity.ts
import { Activity } from 'src/activities/entities/activities.entity';
import { Package } from 'src/packages/entities/packages.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('destinations')
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image_url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relações (pacotes e atividades)
  @OneToMany(() => Package, (pkg) => pkg.destination)
  packages: Package[];

  @OneToMany(() => Activity, (act) => act.destination)
  activities: Activity[];
}
