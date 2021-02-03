import { IsByteLength, IsDate, IsEmail,IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFormularioDto {

    
    @IsNumber()
    codTestDrive: number;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,300)
    nomCliente: string;
    
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    numTelefone: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @IsByteLength(1,300)
    dscEmail: string;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    dscRG: string;
    
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    numCelular: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,20)
    numCPF: string;
    
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,40)
    numCNH: string;

    @IsNotEmpty()
    @IsDate()
    datValidadeCNH: Date;

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
    
}
