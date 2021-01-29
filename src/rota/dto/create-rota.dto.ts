import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRotaDto {
    
    @IsNotEmpty()
    @IsNumber()
    codTrajeto: number;
    
    @IsNotEmpty()
    @IsString()
    nomRota: string;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
