import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInformacaoDto {
    
    @IsNotEmpty()
    @IsString()
    nomInformacao: string
    
    
    @IsString()
    dscInformacao: string
    
    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;
    
    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
