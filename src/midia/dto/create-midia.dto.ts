import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMidiaDto {

    
    @ApiProperty({
        example:'Áudio',
        description:'Nome da mídia reproduzida.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomMidia: string;
    
    @ApiProperty({
        example:'Curva_Direita.mp3',
        description:'Nome do arquivo de mídia.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,500)
    nomArquivo: string;
    
    @ApiProperty({
        example:'../Midia/Audios',
        description:'Nome do diretório ao qual a mídia pertence.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,500)
    nomDiretorio: string;
    
    @ApiProperty({
        example:'2',
        description:'Número do índice do tipo de mídia.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,5)
    codTipoMidia: string;
    
    @ApiProperty({
        example:'S',
        description:'Indica se a mídia está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
    })
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    

    @ApiProperty({
        example:'3',
        description:'Número do índice da concessionaria a qual a mídia está atrelada.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @ApiProperty({
        example:'4',
        description:'Número do índice do usuário que criou a mídia.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
