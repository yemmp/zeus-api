import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateIconeDto {

    @ApiProperty({
        example:'Icone Esquerda',
        description:'Nome do icone.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomIcone: string;
    
    @ApiProperty({
        example:'Icone de curva à esquerda...',
        description:'Descrição do icone.',
    })
    @IsString()
    @IsByteLength(1,500)
    dscIcone: string;
    
    
    @ApiProperty({
        example:'icnEsquerda.jpeg',
        description:'Nome do arquivo de imagem do icone.',
    })
    @IsString()
    @IsByteLength(1,300)
    nomArquivoImagem: string;
    
    
    @ApiProperty({
        example:'icnEsquerda.mp3',
        description:'Nome do arquivo de áudio do icone.',
    })
    @IsString()
    @IsByteLength(1,300)
    nomArquivoAudio: string;
    
    @ApiProperty({
        example:'../Icone',
        description:'Nome da pasta do icone.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,300)
    nomDiretorio: string;
    
    @ApiProperty({
        example:'S',
        description:'Indica se o icone está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice do usuário que criou o icone.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
