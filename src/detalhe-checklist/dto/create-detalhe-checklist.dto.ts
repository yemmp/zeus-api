import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDetalheChecklistDto {

    @IsNotEmpty() 
    @IsNumber()
    codCheckList: number;    
    
    @IsNumber()
    numSequencia: number;    
    
    @IsNotEmpty() 
    @IsString()
    dscTextoCheckList: string;    
    
    @IsNotEmpty() 
    @IsNumber()
    codConcessionaria: number;    
    
    @IsNotEmpty() 
    @IsNumber()
    codUsuarioCriacao: number;    
    


}
