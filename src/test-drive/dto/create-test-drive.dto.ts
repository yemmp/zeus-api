import { IsDate, IsISO8601, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTestDriveDto {

    
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    dataTestDrive: string;
    
    @IsNotEmpty()
    @IsNumber()
    numKmInicial:number;
    
    @IsNumber()
    numKmFinal: number;
    
    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    datSaida: string;
    
    @IsString()
    @IsISO8601()
    datRetorno: string;
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
