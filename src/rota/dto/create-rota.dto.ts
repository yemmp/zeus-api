import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRotaDto {
    

    @ApiProperty({
        example:'2',
        description:'Número do índice do trajeto a qual rota pertence.',
    })
    @IsNumber()
    codTrajeto: number;
    
    
    @ApiProperty({
        example:'Rota 66',
        description:'Nome da Rota.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomRota: string;
    
    indAtivo: string;
    
    
    @ApiProperty({
        example:'3',
        description:'Número do índice da concessionaria a qual rota está atrelada.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @ApiProperty({
        example:'3',
        description:'Número do índice do usuário que criou a rota.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
