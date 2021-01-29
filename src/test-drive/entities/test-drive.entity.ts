import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'
import { Col } from 'sequelize/types/lib/utils';


@Table({
    underscored:true,
    tableName:'test drive'
})
export class TestDrive extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codTestDrive: number;

    @Column
    datTestDrive: Date;

    @Column
    numKmInicial: number;

    @Column
    numKmFinal: number;

    @Column
    datSaida: Date;

    @Column
    datRetorn: Date;
    
    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
