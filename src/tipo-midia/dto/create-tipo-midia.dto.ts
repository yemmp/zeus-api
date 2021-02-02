import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoMidiaDto {
    
    @IsNotEmpty()
    @IsString()
    nomTipoMidia: string;
    
    @IsBoolean()
    indAtivo: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
