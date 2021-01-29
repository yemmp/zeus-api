import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcessionariaDto {
    
    @IsNotEmpty()
    @IsString()
    nomConcessionaria: string;

    @IsNumber() 
    codUsuarioCriacao: number;
    
}
