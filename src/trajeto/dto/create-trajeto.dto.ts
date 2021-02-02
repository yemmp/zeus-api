import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrajetoDto {

    @IsNotEmpty()
    @IsString()
    nomTrajeto: string;
    
    
    @IsNotEmpty()
    @IsString()
    dscTrajeto: string;
    
    
    @IsNumber()
    qtdPontos: number;
    
    
    @IsBoolean()
    indAtivo: boolean;
    
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
