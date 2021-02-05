import { IsByteLength, IsDate, IsDateString, IsIP, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateSessaoDto {

    @IsNotEmpty()
    @IsNumber()
    codUsuario: number;
    
    @IsNotEmpty()
    @IsDateString()
    datInicio: Date;
    
    
    @IsDateString()
    datFim: Date;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscTokenAcesso: string;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    @IsIP()
    codIpOrigem: string;
    
    @IsNotEmpty()
    @IsString()
    @IsByteLength(1,50)
    dscSoAcesso: string;
}
