import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: "El título es requerido" })
  title: string;
}
