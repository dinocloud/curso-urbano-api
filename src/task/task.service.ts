import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entity/task.entity";
import { TaskRepository } from "./task.repository";

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto);
  }

  async findAll(): Promise<Task[]> {
    return await Task.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOneById(id);
    // return await Task.findOne(where: {id});
    // return await this.taskRepository.findOne(where: {id})
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskRepository.updateTask(id, updateTaskDto);
  }

  async delete(id: number): Promise<void> {
    return await this.taskRepository.deleteTask(id);
  }
}
