import { IsByteLength, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDetalheChecklistDto {

    @IsNotEmpty() 
    @IsNumber()
    codCheckList: number;    
    
    @IsNotEmpty() 
    @IsNumber()
    numSequencia: number;    
    
    @IsNotEmpty() 
    @IsString()
    @IsByteLength(1,100)
    dscTextoCheckList: string;    
    
    @IsNotEmpty() 
    @IsNumber()
    codConcessionaria: number;    
    
     
    @IsNumber()
    codUsuarioCriacao: number;    
    


}
