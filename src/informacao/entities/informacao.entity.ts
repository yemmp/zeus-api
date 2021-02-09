import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'informacao'
})
export class Informacao extends Model{
    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codInformacao: number;
    
    @ApiProperty()
    @Column
    nomInformacao: string;

    @ApiProperty()
    @Column
    dscInformacao: string;
    
    @ApiProperty()
    @Column
    indAtivo: string;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}
