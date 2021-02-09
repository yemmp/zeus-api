import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDispositivoDto {

    
    @ApiProperty({
        example:'Zeus-C320',
        description:'Nome do dispositivo.',
    })
    @IsString()
    @IsByteLength(1,100)
    nomDispositivo: string;
    
    
    @ApiProperty({
        example:'ZC320-TMZ2301',
        description:'Número serial do dispositivo.',
    })
    @IsString()
    @IsByteLength(1,100)
    numSerial: string;
    
    
    @ApiProperty({
        example:'L220',
        description:'Nome do modelo do dispositivo.',
    })
    @IsString()
    @IsByteLength(1,100)
    nomModelo: string;
    
    @ApiProperty({
        example:'S',
        description:'Indica se o dispositivo está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice da concessionaria a qual o dispositivo está atrelado.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'3',
        description:'Número do índice do usuário que criou o dispositivo.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number
}
