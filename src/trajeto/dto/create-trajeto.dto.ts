import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTrajetoDto {

    @ApiProperty({
        example:'Trajeto Liberdade',
        description:'Nome do trajeto.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomTrajeto: string;
    
    
   
    @ApiProperty({
        example:'Trajeto que passa pelo circuito cultural da Praça da Liberdade...',
        description:'Descrição do trajeto',
    })
    @IsString()
    @IsByteLength(1,500)
    dscTrajeto: string;
    
    @ApiProperty({
        example:'19',
        description:'Número de pontos existentes dentro do trajeto, com um número máximo de 25 pontos.',
    })
    @IsNotEmpty()
    @IsNumber()
    qtdPontos: number;
    
    
    @ApiProperty({
        example:'S',
        description:'Indica se o trajeto está ativo ou não, sendo utilzado "S" para Ativo e "N" para Inativo.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,1)
    indAtivo: string;
    
    
    @ApiProperty({
        example:'2',
        description:'Número do índice da concessionaria a qual o trajeto está atrelado.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    
    @ApiProperty({
        example:'2',
        description:'Número do índice do usuário que criou o trajeto.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
