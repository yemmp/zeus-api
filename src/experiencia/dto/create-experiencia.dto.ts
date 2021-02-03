import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExperienciaDto {

    @IsNumber()
    codCheckList: number;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
