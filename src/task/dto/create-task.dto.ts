import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: "El título es requerido" })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: "La descripción es requerida" })
  description: string;
}
