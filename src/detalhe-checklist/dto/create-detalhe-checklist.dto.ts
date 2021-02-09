import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDetalheChecklistDto {

    @ApiProperty({
        example:'2',
        description:'Número do índice do check-list ao qual detalhe-checklist está atrelado.',
    })
    @IsNotEmpty() 
    @IsNumber()
    codCheckList: number;    
    
    @ApiProperty({
        example:'2',
        description:'Número do detalhe-checklist na sequência.',
    })
    @IsNotEmpty() 
    @IsNumber()
    numSequencia: number;    
    
    @ApiProperty({
        example:'Essa opção do check-list faz...',
        description:'Descrição do detalhe-checklist.',
    })
    @IsNotEmpty() 
    @IsString()
    @IsByteLength(1,100)
    dscTextoCheckList: string;    
    
    @ApiProperty({
        example:'3',
        description:'Número do índice da concessionaria a qual o detalhe-checklist está atrelado.',
    })
    @IsNotEmpty() 
    @IsNumber()
    codConcessionaria: number;    
    
     
    @ApiProperty({
        example:'2',
        description:'Número do índice do usuário que criou o detalhe-checklist.',
    })
    @IsNumber()
    codUsuarioCriacao: number;    
    


}
