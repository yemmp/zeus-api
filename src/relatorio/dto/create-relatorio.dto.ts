import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRelatorioDto {
    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    indTipoRelatorio:string;
    

    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    codUsuarioCriacao:number;


    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    codConcessionaria:number;
}
