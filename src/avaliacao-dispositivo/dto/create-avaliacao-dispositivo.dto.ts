import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDispositivoDto {

    @ApiProperty({
        example:'2',
        description:'Número do índice do dispositivo ao qual avaliação-dispositivo está atrelada.'
    })
    @IsNotEmpty()
    @IsNumber()
    codDispositivo: number;

    @ApiProperty({
        example:'2',
        description:'Número do índice da experiência-dispositivo ao qual avaliação-dispositivo está atrelada.'
    })
    @IsNumber()
    codExperienciaDispositivo: number;
 
    @ApiProperty({
        example:'2',
        description:'Número do índice da avaliação a qual avaliação-dispositivo está atrelada.'
    })
    @IsNotEmpty()
    @IsNumber()
    codAvaliacao: number;
    
    @ApiProperty({
        example:'6',
        description:'Número da nota de avaliação.'
    })
    @IsNotEmpty()
    @IsNumber()
    numNotaGostou: number;
    
    @ApiProperty({
        example:'Indico tal ocorrência...',
        description:'Recebe a indicação ou a não indicação por parte do avaliador.'
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    numNotaIndica: string;
    
}
