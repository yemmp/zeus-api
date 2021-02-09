import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'
import { Col } from 'sequelize/types/lib/utils';


@Table({
    underscored:true,
    tableName:'test drive'
})
export class TestDrive extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codTestDrive: number;

    @ApiProperty()
    @Column
    dataTestDrive: Date;

    @ApiProperty()
    @Column
    numKmInicial: number;

    @ApiProperty()
    @Column
    numKmFinal: number;

    @ApiProperty()
    @Column
    datSaida: Date;

    @ApiProperty()
    @Column
    datRetorno: Date;
 
    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}
