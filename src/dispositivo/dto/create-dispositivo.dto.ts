import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDispositivoDto {

    
    @IsString()
    @IsByteLength(1,100)
    nomDispositivo: string;
    
    
    @IsString()
    @IsByteLength(1,100)
    numSerial: string;
    
    
    @IsString()
    @IsByteLength(1,100)
    nomModelo: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number
}
