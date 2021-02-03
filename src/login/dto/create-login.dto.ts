import { IsByteLength, IsIP, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateLoginDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @IsString()
    @IsIP()
    @IsByteLength(1,50)
    //Existe tipo de validação pra string "@IsIP()" que chega se uma string é um codigo ip
    codIpOrigem: string;   //Será que compensa mais usa-lo?
    
}
