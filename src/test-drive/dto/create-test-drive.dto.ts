import { ApiProperty } from "@nestjs/swagger";
import { IsByteLength, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString, } from "class-validator";
import { Is } from "sequelize-typescript";

export class CreateTestDriveDto {


    codFormulario: number;


    @ApiProperty({
        example:'1',
        description:''
    })
 //   @IsNumber()
    codDispositivo: number;


    @ApiProperty({
        example:'Executando',
        description:''
    })
  //  @IsString()
    codStatusTestDrive: string;

    @ApiProperty({
        example: '5',
        description: 'Número do Km inicial.',
    })
  //  @IsNotEmpty()
   // @IsNumber()
    numKmInicial: number;

    @ApiProperty({
        example: '35',
        description: 'Número do Km final.',
    })
   // @IsNumber()
    numKmFinal: number;

 
    @ApiProperty({
        example: '2021-02-24',
        description: 'Data de saída da concessionaria.',
    })
   // @IsNotEmpty()
 //   @IsDateString()
    datSaida: Date;

    @ApiProperty({
        example: '2021-02-24',
        description: 'Data de retorno à concessionaria.',
    })
   // @IsDateString()
    datRetorno: Date;
    @ApiProperty({
        example:'',
        description:''
    })
   // @IsString()
    dscResposta1: string;
    @ApiProperty({
        example:'',
        description:''
    })
   // @IsString()
    dscResposta2: string;

    @ApiProperty({
        example:'1',
        description:''
    })
    codRegiao: number;
    
    @ApiProperty({
        example: '1',
        description: 'Número do índice da concessionaria ao qual o test-drive está atrelado.',
    })
 //   @IsNotEmpty()
  //  @IsNumber()
    codConcessionaria: number;

    @ApiProperty({
        example: '4',
        description: 'Número do índice do usuário que criou o test-drive.',
    })
  //  @IsNotEmpty()
   // @IsNumber()
    codUsuarioCriacao: number;

    @ApiProperty({
        example:'0202',
        description:''
    })
    @IsNotEmpty()
    @IsByteLength(4,4)
    datNascimento: string;
    @ApiProperty({
        example:'1111',
        description:''
    })
    @IsNotEmpty()
    @IsString()
    @IsByteLength(4,4)
    numCpf:string;
}
