import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

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


@IsBoolean()
indAtivo: boolean;


@IsNotEmpty()
@IsNumber()
codConcessionaria: number;


@IsNumber()
codUsuarioCriacao: number;



}