import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePontoRotaDto{
    @IsNotEmpty()
    @IsNumber()
    codRota: number;
    
    @IsNotEmpty()
    @IsNumber()
    codIconeMidia: number;
    
    @IsNumber()
    indIconeMidia: number;
    
    @IsNumber()
    numSequencia: number;

    @IsString()
    nomPontoRota: string
    
    @IsString()
    dscTextoPontoRota: string;
    
    @IsNotEmpty()
    @IsNumber()
    numPosicaoX: number;
    
    @IsNotEmpty()
    @IsNumber()
    numPosicaoY: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;

}