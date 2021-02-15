import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsDate, IsDateString, IsIP, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSessaoDto {

    @ApiProperty({
        example:'3',
        description:'Número do índice do usuário que inciou a sessão.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;
   
    @ApiProperty({
        example:'10-02-2021',
        description:'Data na qual a sessão foi iniciada.',
    })
    @IsNotEmpty()
    @IsDateString()
    datInicio: Date;
    
    
    @ApiProperty({
        example:'10-02-2021',
        description:'Data na qual a sessão foi finalizada.',
    })
    @IsDateString()
    datFim: Date;

    @ApiProperty({
        example:'',
        description:'dscTokenAcesso',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscTokenAcesso: string;

    @ApiProperty({
        example:'127.0.0.1',
        description:'Código IP no qual foi feito o login da sessão.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    @IsIP()
    codIpOrigem: string;
    
    @ApiProperty({
        example:'',
        description:'dscSoAcesso',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscSoAcesso: string;
}
