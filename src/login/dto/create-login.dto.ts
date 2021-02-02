import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsIP, IsIPv6 } from "sequelize-typescript";

export class CreateLoginDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @IsString()
     //Existe tipo de validação pra string "@IsIP()" que chega se uma string é um codigo ip
    codIpOrigem: string;   //Será que compensa mais usa-lo?
    
}
