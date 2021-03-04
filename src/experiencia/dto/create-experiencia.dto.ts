import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsByteLength,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional
} from 'class-validator';

export class CreateExperienciaDto {
  @ApiProperty({
    example:'Experiencia Fulano',
    description:'Nome da Experiencia.'
  })
  @IsNotEmpty()
  @IsString()
  nomExperiencia: string;

  @ApiProperty({
    example: '3',
    description:
      'Número do índice do check-list ao qual experiência está atrelada.',
  })
  @IsOptional()
  @IsNumber()
  codCheckList: number;
  
  @ApiProperty({
    example: '2',
    description: 'codFaseAvancada',
  })
  @IsNumber()
  @IsOptional()
  codFaseAvancada: number;

  @IsNotEmpty()
  @IsString()
  @IsByteLength(1, 1)
  @Optional()
  indAtivo: string;

  @ApiProperty({
    example: '10',
    description:
      'Número do índice da concessionaria a qual experiência está atrelada.',
  })
  @IsNotEmpty()
  @IsNumber()
  codConcessionaria: number;

  @ApiProperty({
    example: '2',
    description: 'Número do índice do usuário que criou a experiência.',
  })
  @IsNotEmpty()
  @IsNumber()
  codUsuarioCriacao: number;
}
