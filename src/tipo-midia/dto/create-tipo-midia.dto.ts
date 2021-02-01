import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoMidiaDto {
    
    @IsNotEmpty()
    @IsString()
    nomTipoMidia: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
