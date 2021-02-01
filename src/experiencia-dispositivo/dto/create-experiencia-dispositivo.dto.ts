import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateExperienciaDispositivoDto{

    @IsNotEmpty()
    @IsNumber()
    codDispositivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codExperiencia: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;

}