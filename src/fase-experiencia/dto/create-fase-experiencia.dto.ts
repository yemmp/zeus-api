import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFaseExperienciaDto {

    @IsNotEmpty()
    @IsNumber()
    codExperiencia: number;
    @IsNotEmpty()
    @IsNumber()
    codTipoFase: number;
    @IsNotEmpty()
    @IsNumber()
    codFase: number;
    @IsNumber()
    numSequencia: number;
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;

}
