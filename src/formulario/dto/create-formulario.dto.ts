import { IsDate, IsEmail, IsISO8601, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFormularioDto {

    @IsNotEmpty()
    @IsNumber()
    codTestDrive: number;

    @IsNotEmpty()
    @IsString()
    nomCliente: string;
    
    @IsNumber()
    numTelefone: number;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    dscEmail: string;

    @IsNotEmpty()
    @IsString()
    dscRG: string;

    @IsNumber()
    numCelular: number;

    @IsNotEmpty()
    @IsNumber()
    numCPF: number;

    @IsNotEmpty()
    @IsNumber()
    numCNH: number;

    @IsNotEmpty()
    @IsString()
    @IsISO8601()
    datValidadeCNH: string;

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
