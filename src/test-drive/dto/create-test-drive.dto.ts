import { IsDate,  IsDateString,  IsNotEmpty, IsNumber,  } from "class-validator";

export class CreateTestDriveDto {

    
    @IsNotEmpty()
    @IsDateString()
    dataTestDrive: Date;
    
    @IsNotEmpty()
    @IsNumber()
    numKmInicial:number;
    
    @IsNumber()
    numKmFinal: number;
    
    
    @IsNotEmpty()
    @IsDateString()
    datSaida: Date;
    
    @IsDateString()
    datRetorno: Date;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
