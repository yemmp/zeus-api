import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateRegiaoDto {
  @ApiProperty({
    example: 'Região Leste',
    description: 'Nome da Região',
  })
  @IsString()
  nomRegiao: string;

  @ApiProperty({
    example: 'Região pararapururu....',
    description: 'Descrição da Região',
  })
  @IsString()
  dscRegiao: string;

  @ApiProperty({
    example: 'S',
    description: '',
  })
  @IsString()
  indAtivo: string;

  @ApiProperty({
    example: '1',
    description: 'Número do índice do usuário que criou a região',
  })
  @IsNumber()
  codUsuarioCriacao: number;
}
