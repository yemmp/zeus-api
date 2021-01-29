import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDispositivoDto {

    @IsNotEmpty()
    @IsString()
    nomDispositivo: string;
    
    @IsNotEmpty()
    @IsNumber()
    numSerial: number;
    
    @IsNotEmpty()
    @IsString()
    nomModelo: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number
}
