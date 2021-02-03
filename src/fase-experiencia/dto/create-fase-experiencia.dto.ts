import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFaseExperienciaDto {

    @IsNumber()
    codExperiencia: number;

    @IsNotEmpty()
    @IsNumber()
    codFase: number;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,5)
    codTipoFase: string;

    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;

}
