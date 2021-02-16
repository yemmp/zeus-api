import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePontoRotaDto {

    @ApiProperty({
        example:'5',
        description:'Número do índice da rota a qual o ponto-rota pertence.',
    })
    @IsNumber()
    codRota: number;
 
    @ApiProperty({
        example:'2',
        description:'Número do índice  da mídia que será reproduzida neste ponto-rota.',
    })
    @IsNumber()
    codMidia: number;

    @ApiProperty({
        example:'Audio',
        description:'Tipo da midia em ponto-rota',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,10)
    codTipoMidia: string;
    
    @ApiProperty({
        example:'2',
        description:'Número do ponto-rota na sequência dos pontos-rota.',
    })
    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;
    
    @ApiProperty({
        example:'Ponto-rota: Palácio da Liberdade',
        description:'Nome do ponto-rota.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomPontoRota: string;
    
    @ApiProperty({
        example:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:'Texto a ser exibido na tela.'
    })
    @IsString()
    @IsByteLength(1,300)
    dscTextoVisual: string;
  
    @ApiProperty({
        example:'Nulla dictum congue tellus eget placerat. Donec ultrices tempor eros, eget malesuada arcu congue et.',
        description:'Texto a ser narrado para o motorista.'
    })
    @IsString()
    @IsByteLength(1,500)
    dscTextoNarrado: string;
  
    @ApiProperty({
        example:'-30.00000',
        description:'Latitude do ponto-rota.',
    })
    @IsNumber()
    numPosicaoX: number;
    
    @ApiProperty({
        example:'20.00000',
        description:'Longitude do ponto-rota.',
    })
    @IsNumber()
    numPosicaoY: number;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice da concessionaria a qual o ponto-rota está atrelado.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'6',
        description:'Número do índice do usuário que criou o ponto-rota.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
