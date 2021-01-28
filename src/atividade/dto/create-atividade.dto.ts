import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAtividadeDto {

    @IsNotEmpty()
    @IsNumber()
    codFase: number;

    @IsNotEmpty()
    @IsNumber()
    codMidia: number;

    @IsNotEmpty()
    @IsNumber()
    codTipoMidia: number;

    @IsNumber()
    numSequencia: number;
    
    @IsString()
    nomAtividade: string;

    @IsString()
    codTipoAtividade: String;

    @IsNotEmpty() //Optando por não deixar vazio, para ter um track de qual concessionaria pertence tal Atividade
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()  //Optando por não deixar vazio, para existir registro de quem criou
    @IsNumber()
    codUsuarioCriacao: number;

}
