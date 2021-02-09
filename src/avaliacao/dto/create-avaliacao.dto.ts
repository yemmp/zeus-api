import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsString } from "class-validator";

export class CreateAvaliacaoDto {

    @ApiProperty({
        example:'Avaliação 2319',
        description:'Nome da avaliação',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomAvaliacao: string;
    
   
    @ApiProperty({
        example:'Avaliacao_2319.arq',
        description:'Nome do arquivo de avaliação.',
    })
    @IsString()
    @IsByteLength(1,300)
    nomArquivo: string;
    
    @ApiProperty({
        example:'../Avaliacoes',
        description:'Nome da pasta onde estão os arquivos de avaliação.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,300)
    nomDiretorio: string;
}
