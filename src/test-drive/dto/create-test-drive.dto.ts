import { ApiProperty } from "@nestjs/swagger";
import { IsDate,  IsDateString,  IsNotEmpty, IsNumber,  } from "class-validator";

export class CreateTestDriveDto {

    
    @ApiProperty({
        example:'09-02-2021',
        description:'Data do test-drive.',
    })
    @IsNotEmpty()
    @IsDateString()
    dataTestDrive: Date;
    
    @ApiProperty({
        example:'5',
        description:'Número do Km inicial.',
    })
    @IsNotEmpty()
    @IsNumber()
    numKmInicial:number;
    
    @ApiProperty({
        example:'35',
        description:'Número do Km final.',
    })
    @IsNumber()
    numKmFinal: number;
    
    
    @ApiProperty({
        example:'09-02-2021',
        description:'Data de saída da concessionaria.',
    })
    @IsNotEmpty()
    @IsDateString()
    datSaida: Date;
    
    @ApiProperty({
        example:'09-02-2021',
        description:'Data de retorno à concessionaria.',
    })
    @IsDateString()
    datRetorno: Date;
    
    @ApiProperty({
        example:'1',
        description:'Número do índice da concessionaria ao qual o test-drive está atrelado.',
    })
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @ApiProperty({
        example:'4',
        description:'Número do índice do usuário que criou o test-drive.',
    })
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
