import { BadRequestException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
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
    const task = await this.findOne({ where: { id } });
    return task;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    const task: Task = await this.findOneById(id);
    if (!!task) {
      const taskSaved = await this.findOne({
        where: { title: updateTaskDto.title },
      });
      if (!!taskSaved && taskSaved.id !== task.id) {
        throw new BadRequestException("Existe una tarea con ese título");
      }
      task.title = updateTaskDto.title;
      task.description = updateTaskDto.description;
      await task.save();
      return task;
    } else {
      throw new NotFoundException(`La tarea no existe`);
    }
  }
}
