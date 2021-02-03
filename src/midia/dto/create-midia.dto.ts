import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMidiaDto {

    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomMidia: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,500)
    nomArquivo: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,500)
    nomDiretorio: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,5)
    codTipoMidia: string;
    
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
