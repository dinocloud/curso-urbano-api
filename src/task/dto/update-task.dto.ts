import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateTaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: "El título es requerido" })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: "La descripción es requerida" })
  description: string;
}
