import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty } from 'class-validator';

@Entity('task')
export class Task extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @MaxLength(10, { always: true })
  @IsNotEmpty({ message: 'El título es requerido' })
  @Column({ length: 10, nullable: false, unique: true })
  title: string;

  @ApiProperty()
  @MaxLength(500, { always: true })
  @IsNotEmpty({ message: 'La descripción es requerida' })
  @Column({ length: 500, nullable: false })
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
