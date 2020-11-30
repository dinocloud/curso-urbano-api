import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Comment } from "./entity/comment.entity";
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

  // @Put(':id')
  // update(@Param('id') id: string): Promise<Task> {
  //   return magic;
  // }

  @Post("/:id/comment")
  async createComment(
    @Param("id") id: number,
    @Body() createCommentDto: CreateCommentDto
  ): Promise<Comment> {
    return await this.taskService.createComment(id, createCommentDto);
  }
}
