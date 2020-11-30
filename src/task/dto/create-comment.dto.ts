import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty({ message: "El comentario es requerido" })
  body: string;
}
