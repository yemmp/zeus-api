import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDispositivoDto {

    @IsNotEmpty()
    @IsNumber()
    codDispositivo: number;

    @IsNumber()
    codExperienciaDispositivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codAvaliacao: number;
    
    @IsNotEmpty()
    @IsNumber()
    numNotaGostou: number;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    numNotaIndica: string;
    
}
