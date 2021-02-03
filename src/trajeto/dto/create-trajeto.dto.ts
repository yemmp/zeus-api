import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrajetoDto {

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomTrajeto: string;
    
    
    
    @IsString()
    @IsByteLength(1,500)
    dscTrajeto: string;
    
    @IsNotEmpty()
    @IsNumber()
    qtdPontos: number;
    
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
