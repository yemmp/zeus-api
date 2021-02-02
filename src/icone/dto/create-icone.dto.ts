import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

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
    
    @IsBoolean()
    indAtivo: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
