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
    numSerial: string;

    @Column
    nomModelo: string;
    
    @Column
    indAtivo: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
