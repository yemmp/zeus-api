import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class CreateExperienciaDto {

    @IsNotEmpty()
    @IsNumber()
    codCheckList: number;
    
    @IsBoolean()
    indAtivo: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
