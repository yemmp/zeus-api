import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsByteLength,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateExperienciaDto {
  @ApiProperty({
    example: '3',
    description:
      'Número do índice do check-list ao qual experiência está atrelada.',
  })
  @IsNumber()
  codCheckList: number;

  @ApiProperty({
    example: 'S',
    description:
      'Indica se a experiência está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
  })
  
  @ApiProperty({
    example: '',
    description: '',
  })
  @IsNumber()
  codFaseAvancada: number;

  @IsNotEmpty()
  @IsString()
  @IsByteLength(1, 1)
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
