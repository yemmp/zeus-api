import { ApiPropertyOptional } from "@nestjs/swagger";
import { ZeusQueryDTO } from "src/common/zeus-query-dto";

export class QueryFormularioDTO extends ZeusQueryDTO{

    @ApiPropertyOptional()
    datNascimento: number;
    @ApiPropertyOptional()
    numCpf: string;
}