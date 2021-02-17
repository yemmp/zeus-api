import { ApiProperty } from '@nestjs/swagger';
import {
  IsByteLength,
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateFormularioDto {
   @ApiProperty({
    example: 'Cláudio Fonseca da Silva',
    description: 'Nome do Cliente.',
  })
  @IsNotEmpty()
  @IsString()
  nomCliente: string[1];

  @ApiProperty({
    example: '(31) 3252-9525',
    description: 'Número do telefone fornecido pelo cliente.',
  })
  @IsNotEmpty()
  @IsString()
  numTelefone: string;

  @ApiProperty({
    example: 'sfonsecaclaudio@mail.com',
    description: 'E-mail de contato fornecido pelo cliente.',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  dscEmail: string;

  @ApiProperty({
    example: 'BR 12.500.211',
    description: 'Código do RG do cliente.',
  })
  @IsNotEmpty()
  @IsString()
  dscRG: string;

  @ApiProperty({
    example: '(31) 9 9429-2333',
    description: 'Número do telefone fornecido pelo cliente.',
  })
  @IsNotEmpty()
  @IsString()
  numCelular: string;

  @ApiProperty({
    example: '000-000-00-00',
    description: 'Número do cpf do cliente.',
  })
  @IsNotEmpty()
  @IsString()
  numCPF: string;

  @ApiProperty({
    example: '000123456789',
    description: 'Número do CNH do cliente.',
  })
  @IsNotEmpty()
  @IsString()
  numCNH: string;


  file: any;

  @ApiProperty({
    example: 'Masc',
    description: 'Indica o sexo do cliente',
  })
  @IsString()
  codSexo: string;

  @ApiProperty({
    example: '02-10-1965',
    description: 'Data de nascimento do cliente',
  })
  @IsDateString()
  @IsNotEmpty()
  datNascimento: Date;

  @ApiProperty({
    example: '21-12-2024',
    description: 'Data de validade da CNH do cliente.',
  })
  @IsNotEmpty()
  @IsDateString()
  datValidadeCNH: Date;

  @ApiProperty({
    example:'21-02-2020',
    description: 'Data do último acesso do cliente.'
  })
  @IsNotEmpty()
  @IsDateString()
  datUltimoAcesso:Date;

  @ApiProperty({
    example: '4',
    description:
      'Número do índice da concessionaria a qual o formulário está atrelado.',
  })
  @IsNotEmpty()
  @IsNumber()
  codConcessionaria: number;

  @ApiProperty({
    example: '6',
    description: 'Número do índice do usuário que criou o formulário.',
  })
  @IsNotEmpty()
  @IsNumber()
  codUsuarioCriacao: number;
}
