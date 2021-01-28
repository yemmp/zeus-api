import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMidiaDto {

    @IsNotEmpty()
    @IsNumber()
    codTipoMidia: number;

    @IsNotEmpty()
    @IsString()
    nomMidia: string;

    @IsNotEmpty()
    @IsString()
    nomArquivo: string;

    @IsNotEmpty()
    @IsString()
    nomDiretorio: string;

    @IsNumber()
    indAtivo: number;
    
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
