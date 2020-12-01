import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entity/task.entity";
import { TaskService } from "./task.service";

@ApiTags("Task")
@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<{ data: Task[] }> {
    const tasks = await this.taskService.findAll();
    return { data: tasks };
  }

  @Get("/:id")
  async findOne(@Param("id") id: number): Promise<Task> {
    return await this.taskService.findOne(id);
  }

  @Put("/:id")
  async update(
    @Param("id") id: number,
    @Body() updateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    return await this.taskService.update(id, updateTaskDto);
  }

  @Delete("/:id")
  async delete(
    @Param("id") id: number,
  ): Promise<void> {
    return await this.taskService.delete(id);
  }
}
