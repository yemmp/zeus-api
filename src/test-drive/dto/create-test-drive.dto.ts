import { IsDate,  IsNotEmpty, IsNumber,  } from "class-validator";

export class CreateTestDriveDto {

    
    @IsNotEmpty()
    @IsDate()
    dataTestDrive: Date;
    
    @IsNotEmpty()
    @IsNumber()
    numKmInicial:number;
    
    @IsNumber()
    numKmFinal: number;
    
    
    @IsNotEmpty()
    @IsDate()
    datSaida: Date;
    
    @IsDate()
    datRetorno: Date;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
