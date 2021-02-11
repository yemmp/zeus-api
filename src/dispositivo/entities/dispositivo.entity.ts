import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'dispositivo',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Dispositivo extends Model{


    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codDispositivo:number;

    @ApiProperty()
    @Column
    nomDispositivo: string;

    @ApiProperty()
    @Column
    numSerial: string;

    @ApiProperty()
    @Column
    nomModelo: string;
    
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
