import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoMidiaDto {
    
    @IsNotEmpty()
    @IsString()
    nomeTipoMidia: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
