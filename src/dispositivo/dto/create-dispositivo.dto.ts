import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDispositivoDto {

    @ApiProperty({
        example:'',
        description:''
    })
    @IsNumber()
    codVeiculo: number;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    codUsuarioSistema: number;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    nomDispositivo: string;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    dscIdioma: string;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsNotEmpty()
    @IsString()
    indAtivo: string;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria:number;

    @ApiProperty({
        example:'',
        description:''
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao:number;
}
