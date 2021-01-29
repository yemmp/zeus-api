import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCheckListDto {

    @IsNotEmpty()
    @IsNumber()
    codConcessionaria: number;

    @IsNotEmpty()
    @IsNumber()
    codUsuarioCriacao: number;
}
