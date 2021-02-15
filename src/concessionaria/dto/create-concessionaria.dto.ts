import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConcessionariaDto {
    
    @ApiProperty({
        example:'Concessionaria Raja',
        description:'Nome da concessionaria.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomConcessionaria: string;
    
    @ApiProperty({
        example:'3',
        description:'Número do índice do usuário que criou a concessionaria.',
    })
    @IsNotEmpty()
    @IsNumber() 
    codUsuarioCriacao: number;

    nomUsuarioMAster: string;

    dscEmailUsuarioMaster: string;

    dscSenhaUsuarioMaster: string;
    
}
