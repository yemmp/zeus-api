import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFaseExperienciaDto {

    @ApiProperty({
        example:'2',
        description:'Número do índice da experiência atrelada a fase-experiência.',
    })
    @IsNumber()
    codExperiencia: number;

    @ApiProperty({
        example:'4',
        description:'Número do índice da fase atrelada a fase-experiência.',
    })
    @IsNotEmpty()
    @IsNumber()
    codFase: number;

    @ApiProperty({
        example:'3',
        description:'Número do índice do tipo-fase da fase-experiência.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,5)
    codTipoFase: string;

    @ApiProperty({
        example:'2',
        description:'Número da fase-experiência na sequência.',
    })
    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;

    @ApiProperty({
        example:'5',
        description:'Número do índice da concessionaria a qual a fase-experiência está atrelada.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'6',
        description:'Número do índice do usuário que criou a fase-experiência.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;

}
