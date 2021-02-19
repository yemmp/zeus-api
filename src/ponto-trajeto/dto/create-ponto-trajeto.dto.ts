import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePontoTrajetoDto {
    @ApiProperty({
        example:'Fulano Trjeot',
        description:'Nome ponto trajeto'
    })
    @IsString()
    nomPontoTrajeto: string;

    @ApiProperty({
        example:'2',
        description:'Número do índice do trajeto ao qual ponto-trajeto pertence.',
    })
    @IsNotEmpty()
    @IsNumber()
    codTrajeto: number;
    
    @ApiProperty({
        example:'2',
        description:'Número do ponto-trajeto na sequência de pontos-trajeto.',
    })
    @IsNotEmpty()
    @IsNumber()
    numSequencia: number;
    
    @ApiProperty({
        example:'-40.00000',
        description:'Latitude do ponto-trajeto.',
    })
    @IsNotEmpty()
    @IsNumber()
    numPosicaoX: number;
    
    @ApiProperty({
        example:'20.00000',
        description:'Longitude do ponto trajeto.',
    })
    @IsNotEmpty()
    @IsNumber()
    numPosicaoY: number;
      
}
