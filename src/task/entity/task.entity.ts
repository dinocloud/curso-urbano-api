import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, IsNotEmpty } from "class-validator";
import { Comment } from "./comment.entity";

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
  @IsNotEmpty({ message: "La descripción es requerida" })
  @Column({ length: 500, nullable: false })
  description: string;

  @ApiProperty()
  @OneToMany(() => Comment, (comment) => comment.task, {
    cascade: ["insert"],
  })
  comment: Comment[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
