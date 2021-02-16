import { Optional } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { ZeusQueryDTO } from "src/common/zeus-query-dto";

export class QueryUsuarioDTO extends ZeusQueryDTO{
  @ApiPropertyOptional()
  nomUsuario?: string;
  @ApiPropertyOptional()
  dscLogin: string;
  @ApiPropertyOptional()
  codTipoPerfil: string;
}