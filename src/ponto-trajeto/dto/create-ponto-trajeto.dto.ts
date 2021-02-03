import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePontoTrajetoDto {

    @IsNotEmpty()
    @IsNumber()
    codTrajeto: number;
    
    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;
    
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
