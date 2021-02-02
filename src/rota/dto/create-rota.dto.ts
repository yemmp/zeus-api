import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRotaDto {
    
    @IsNotEmpty()
    @IsNumber()
    codTrajeto: number;
    
    @IsNotEmpty()
    @IsString()
    nomRota: string;
    
    @IsBoolean()
    indAtivo: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
