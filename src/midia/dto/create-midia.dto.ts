import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

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

    @IsBoolean()
    indAtivo: boolean;
    
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
