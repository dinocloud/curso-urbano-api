import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, IsNotEmpty } from "class-validator";
import { Task } from "./task.entity";

@Entity("comment")
export class Comment extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @MaxLength(500, { always: true })
  @IsNotEmpty({ message: "El comentario no puede ser nulo" })
  @Column({ length: 500, nullable: false })
  body: string;

  @ApiProperty()
  @ManyToOne(() => Task, (task) => task.id, { cascade: ["insert"] })
  task: Task;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;
}
