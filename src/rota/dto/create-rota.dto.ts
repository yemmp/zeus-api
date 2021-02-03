import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRotaDto {
    

    @IsNumber()
    codTrajeto: number;
    
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomRota: string;
    
    
    @IsNotEmpty()
    @IsByteLength(1,1)
    indAtivo: string;
    
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
