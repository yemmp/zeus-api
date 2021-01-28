import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateLoginDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @IsNumber()   //Existe tipo de validação pra string "@IsIP()" que chega se uma string é um codigo ip
    codIpOrigem: number;   //Será que compensa mais usa-lo?
    
}
