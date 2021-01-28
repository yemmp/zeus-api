import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {

@IsNotEmpty()
@IsString()
codPerfil: string;


@IsNotEmpty()
@IsString()
nomeUsuario: string;


@IsNotEmpty()
@IsString()
dscLogin: string;


@IsNumber()
indAtivo: number;


@IsNotEmpty()
@IsNumber()
codConcessionaria: number;


@IsNumber()
codUsuarioCriacao: number;



}