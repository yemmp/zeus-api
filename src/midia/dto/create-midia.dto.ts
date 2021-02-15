import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMidiaDto {

    
    @ApiProperty({
        example:'Áudio',
        description:'Nome da mídia reproduzida.',
    })
    nomMidia: string;
    
    @ApiProperty({
        example:'image/jpeg',
        description:'Mime type do tipo de mída.',
    })
    @IsNotEmpty()
    @IsString()
    codTipoMidia: string;
    
    @ApiProperty({
        example:'Curva_Direita.mp3',
        description:'Nome do arquivo de mídia.',
    })
    nomArquivo: string;
    
    // @ApiProperty({
    //     example:'../Midia/Audios',
    //     description:'Nome do diretório ao qual a mídia pertence.',
    // })
    // @IsNotEmpty()
    // @IsString()
    // @IsByteLength(1,500)
    // nomDiretorio: string;  

    @ApiProperty({
        example:'3',
        description:'Número do índice da concessionaria a qual a mídia está atrelada.',
    })
    codConcessionaria: string;

    @ApiProperty({
        example:'4',
        description:'Número do índice do usuário que criou a mídia.',
    })
    codUsuarioCriacao: string;

    @ApiProperty()
    dscEncoding: string

    @ApiProperty()
    dscSize: string

    file: any
    
}
