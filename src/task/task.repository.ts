import { BadRequestException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Comment } from "./entity/comment.entity";
import { Task } from "./entity/task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskSaved = await this.findOne({
      where: { title: createTaskDto.title },
    });
    if (!!taskSaved) {
      throw new BadRequestException("Existe una task con ese título");
    }

    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    await this.save(task);
    return task;
  }

  async findOneById(id: number): Promise<Task> {
    const task = await this.findOne({ where: { id }, relations: ["comment"] });
    return task;
  }

  async createComment(
    id: number,
    createCommentDto: CreateCommentDto
  ): Promise<Comment> {
    const taskSaved = await this.findOne({
      where: { id },
    });
    if (!taskSaved) {
      throw new BadRequestException("No existe la task solicitada");
    }

    const comment = new Comment();
    comment.body = createCommentDto.body;
    comment.task = taskSaved;
    await comment.save();
    return comment;
  }
}
