import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAvaliacaoDispositivoDto {

    @IsNotEmpty()
    @IsNumber()
    codDispositivo: number;
    
    @IsNotEmpty()
    @IsNumber()
    codAvaliacao: number;
    
    @IsNotEmpty()
    @IsNumber()
    numNotaGostou: number;
    
    @IsNotEmpty()
    @IsNumber()
    numNotaIndica: number;
    
}
