import { ApiProperty } from '@nestjs/swagger';
import { IsByteLength, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAtividadeDto {

  @ApiProperty({
    example: '2',
    description: 'Número do índice da mídia a qual a atividade está atrelada.',
  })
  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  codMidia: number;

  @ApiProperty({
    example: '4',
    description: 'Número da atividade na sequência de atividades.',
  })
  @IsNotEmpty()
  @IsNumber()
  numSequencia: number;

  @ApiProperty({
    example: 'Atividade X',
    description: 'Nome da atividade.',
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1, 100)
  nomAtividade: string;

  @ApiProperty({
    example: '2',
    description: 'Número do tipo de atividade.',
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1, 40)
  codTipoAtividade: String;

  @ApiProperty({
    example: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Texto a ser exibido na tela.',
  })
  @IsString()
  @IsByteLength(1,300)
  @IsOptional()
  dscTextoVisual: string;

  @ApiProperty({
    example: 'Nulla dictum congue tellus eget placerat. Donec ultrices tempor eros, eget malesuada arcu congue et.',
    description: 'Texto a ser narrado ao motorista.',
  })
  @IsString()
  @IsByteLength(1,500)
  @IsOptional()
  dscTextoNarrado: string;

  @ApiProperty({
    example: '3',
    description:
      'Número do índice da concessionaria a qual a atividade está atrelada.',
  })
  @IsNotEmpty() //Optando por não deixar vazio, para ter um track de qual concessionaria pertence tal Atividade
  @IsNumber()
  @IsOptional()
  codConcessionaria: number;

  @ApiProperty({
    example: '1',
    description: 'Número do índice do usuário que criou a atividade.',
  })
  @IsNotEmpty() //Optando por não deixar vazio, para existir registro de quem criou
  @IsNumber()
  codUsuarioCriacao: number;

  @ApiProperty({
    example: '1',
    description: 'Número do índice da informação a qual a atividade pertence.',
  })
  @IsNumber()
  codInformacao: number;
}
