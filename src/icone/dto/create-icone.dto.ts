import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateIconeDto {

    @IsNotEmpty()
    @IsString()
    nomIcone: string;
    
    @IsString()
    dscIcone: string;
    
    @IsNotEmpty()
    @IsString()
    nomArquivoImagem: string;
    
    @IsNotEmpty()
    @IsString()
    nomArquivoAudio: string;
    
    @IsNotEmpty()
    @IsString()
    nomDiretorio: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
