import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrajetoDto {

    @IsNotEmpty()
    @IsString()
    nomTrajeto: string;
    
    
    @IsNotEmpty()
    @IsString()
    dscTrajeto: string;
    
    
    @IsNumber()
    qtdPontos: number;
    
    
    @IsNumber()
    indAtivo: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
