import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateExperienciaDispositivoDto {

    @IsNumber()
    codDispositivo:number;
    
    @IsNumber()
    codExperiencia: number;
    
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
