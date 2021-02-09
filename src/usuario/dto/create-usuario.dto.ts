import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {

@ApiProperty({
  example: 'Maine Coon',
  description: 'Nome do usuário.',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,100)
nomUsuario: string

@ApiProperty({
  example: 'mainecoon',
  description: 'Login do usuário.',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,50)
dscLogin: string;

@ApiProperty({
  example:'maineCoonPassword',
  description:'Senha do usuário.',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,40)
//@IsAlphanumeric() limita a senha apenas a letras e numeros
dscSenha: string;

@ApiProperty({
  example:'3',
  description:'Número que indica o tipo de perfil do usuário. (1-Master, 2-Admin, 3-Config, 4-Analist)',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,5)
codTipoPerfil: string

@ApiProperty({
  example:'S',
  description:'Indica se o usuário está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,1)
indAtivo:string;

@ApiProperty({
  example:'1',
  description:'Número do índice da concessionaria a qual o usuário pertence.',
})
@IsNotEmpty()
@IsNumber()
codConcessionaria: number;

@ApiProperty({
  example:'1',
  description:'Número do índice do usuário que criou este usuário.',
})
@IsNotEmpty()
@IsNumber()
codUsuarioCriacao: number;

}