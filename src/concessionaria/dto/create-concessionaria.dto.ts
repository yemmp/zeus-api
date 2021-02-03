import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcessionariaDto {
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomConcessionaria: string;
    
    @IsNotEmpty()
    @IsNumber() 
    codUsuarioCriacao: number;
    
}
