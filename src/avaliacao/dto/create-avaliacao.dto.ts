import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsString } from "class-validator";

export class CreateAvaliacaoDto {

    @ApiProperty({
        example: 'Avaliação 2319',
        description: 'Nome da avaliação',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1, 100)
    nomAvaliacao: string;

    @ApiProperty({
        example: '',
        description: ''
    })
    @IsString()
    dscIdioma: string;

    @ApiProperty({
        example: '',
        description: ''
    })
    @IsString()
    dscPergunta1: string;

    @ApiProperty({
        example: '',
        description: ''
    })
    @IsString()
    dscPergunta2: string;
}
