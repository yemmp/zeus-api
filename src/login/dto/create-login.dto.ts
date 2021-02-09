import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsIP, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateLoginDto {

    @ApiProperty({
        example:'2',
        description:'Número do índice do usuário que fez o login.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;

    @ApiProperty({
        example:'127.0.0.1',
        description:'Código IP no qual o login foi feito.',
    })
    @IsString()
    @IsIP()
    @IsByteLength(1,50)
    //Existe tipo de validação pra string "@IsIP()" que chega se uma string é um codigo ip
    codIpOrigem: string;   //Será que compensa mais usa-lo?
    
}
