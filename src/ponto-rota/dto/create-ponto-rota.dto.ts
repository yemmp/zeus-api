import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePontoRotaDto {

    @IsNumber()
    codRota: number;
    
    @IsNumber()
    codIconeMidia: number;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indIconeMidia: string;
    
    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomPontoRota: string;
    
    @IsString()
    @IsByteLength(1,300)
    dscTextoPontoRota: string;
    
    @IsNumber()
    numPosicaoX: number;
    
    @IsNumber()
    numPosicaoY: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
