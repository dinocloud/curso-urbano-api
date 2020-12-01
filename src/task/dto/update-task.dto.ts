import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateTaskDto {
  @ApiProperty()
  @IsNotEmpty({ message: "El título es requerido" })
  title: string;

  @ApiProperty()
  @IsBoolean({ message: "Especificar si fue realizado o no'" })
  done: boolean;
}
