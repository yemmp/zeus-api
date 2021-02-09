import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {

@ApiProperty({
  example: 'Maine Coon',
  description: 'Nome do usuário',
})
@IsNotEmpty()
@IsString()
@IsByteLength(1,100)
nomUsuario: string

@IsNotEmpty()
@IsString()
@IsByteLength(1,50)
dscLogin: string;

@IsNotEmpty()
@IsString()
@IsByteLength(1,40)
//@IsAlphanumeric() limita a senha apenas a letras e numeros
dscSenha: string;

@IsNotEmpty()
@IsString()
@IsByteLength(1,5)
codTipoPerfil: string

@IsNotEmpty()
@IsString()
@IsByteLength(1,1)
indAtivo:string;

@IsNotEmpty()
@IsNumber()
codConcessionaria: number;

@IsNotEmpty()
@IsNumber()
codUsuarioCriacao: number;

}