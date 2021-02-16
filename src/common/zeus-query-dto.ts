import { ApiPropertyOptional } from "@nestjs/swagger";

export class ZeusQueryDTO {
  @ApiPropertyOptional({default: 'APP'})
  projecao:string= 'APP'
}
