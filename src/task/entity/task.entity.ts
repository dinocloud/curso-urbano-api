import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, IsNotEmpty, IsBoolean } from "class-validator";

@Entity("task")
export class Task extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @MaxLength(10, { always: true })
  @IsNotEmpty({ message: "El título es requerido" })
  @Column({ length: 10, nullable: false, unique: true })
  title: string;

  @ApiProperty()
  @MaxLength(500, { always: true })
  @IsBoolean({ message: "Especificar si fue realizado o no" })
  @Column({ default: false })
  done: boolean;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
