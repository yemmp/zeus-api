import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoFaseDto {
    
    @IsNotEmpty()
    @IsString()
    nomTipoFase: string;
    
    
    @IsNotEmpty()
    @IsString()
    dscTipoFase: string;
    
    @IsBoolean()
    indAtivo: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
