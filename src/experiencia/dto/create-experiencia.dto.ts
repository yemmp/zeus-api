import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateExperienciaDto {

    @IsNotEmpty()
    @IsNumber()
    codCheckList: number;
    
    @IsNumber()
    indAtivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
