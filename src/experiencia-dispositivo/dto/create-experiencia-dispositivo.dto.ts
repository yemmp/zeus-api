import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateExperienciaDispositivoDto {

    @ApiProperty({
        example:'3',
        description:'Número do índice do dispositivo atrelado a experiência-dispositivo.',
    })
    @IsNumber()
    codDispositivo:number;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice da experiência atrelada a experiência-dispositivo.',
    })
    @IsNumber()
    codExperiencia: number;
    
    @ApiProperty({
        example:'8',
        description:'Número do índice da concessionaria a qual experiência-dispositivo está atrelada.',
    })
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'10',
        description:'Número do índice do usuário que criou a experiência-dispositivo.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
