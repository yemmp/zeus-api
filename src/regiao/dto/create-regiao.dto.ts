import { ApiProperty } from '@nestjs/swagger';
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRegiaoDto {
  @ApiProperty({
    example: 'Região Leste',
    description: 'Nome da Região',
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1,50)
  nomRegiao: string;

  @ApiProperty({
    example: 'Região pararapururu....',
    description: 'Descrição da Região',
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1,300)
  dscRegiao: string;

  @ApiProperty({
    example: 'S',
    description: 'Indica se a região está ativa ou não, sendo utilzado "S" para Ativo e "N" para Inativo',
  })
  @IsNotEmpty()
  @IsString()
  @IsByteLength(1,1)
  indAtivo: string;

  @ApiProperty({
    example: '1',
    description: 'Número do índice do usuário que criou a região',
  })
  @IsNotEmpty()
  @IsNumber()
  codUsuarioCriacao: number;
}
