import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'dispositivo'
})
export class Dispositivo extends Model{


    @PrimaryKey
    @AutoIncrement
    @Column
    codDispositivo:number;

    @Column
    nomDispositivo: string;

    @Column
    numSerial: number;

    @Column
    nomModelo: string;
    
    @Column
    indAtivo: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
