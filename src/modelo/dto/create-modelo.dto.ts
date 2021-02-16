import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateModeloDto {
    
    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    nomModelo:string;
    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    dscModelo:string;
    @ApiProperty({
        example:'',
        description:''
    })
    @IsString()
    indAtivo:string;
    @ApiProperty({
        example:'',
        description:''
    })
    @IsNumber()
    codUsuarioCriacao:number;
}
