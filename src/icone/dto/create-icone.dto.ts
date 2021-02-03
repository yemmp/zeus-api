import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateIconeDto {

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomIcone: string;
    
    @IsString()
    @IsByteLength(1,500)
    dscIcone: string;
    
    
    @IsString()
    @IsByteLength(1,300)
    nomArquivoImagem: string;
    
    
    @IsString()
    @IsByteLength(1,300)
    nomArquivoAudio: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,300)
    nomDiretorio: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
