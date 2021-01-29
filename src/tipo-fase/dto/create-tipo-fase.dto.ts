import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTipoFaseDto {
    
    @IsNotEmpty()
    @IsString()
    nomTipoFase: string;
    
    
    @IsNotEmpty()
    @IsString()
    dscTipoFase: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
