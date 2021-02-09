import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInformacaoDto {
    
    @ApiProperty({
        example:'Informação Zeus X',
        description:'Nome da Informação.',
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,100)
    nomInformacao: string
    
    
    @ApiProperty({
        example:'Zeus X é o mais novo sistema...',
        description:'Descrição da informação.',
    })
    @IsString()
    @IsByteLength(1,500)
    dscInformacao: string
    
    @ApiProperty({
        example:'4',
        description:'Número do índice da concessionaria a qual a informação está atrelada.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice do usuário que criou esta informação.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
