import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey} from 'sequelize-typescript'
import { Trajeto } from 'src/trajeto/entities/trajeto.entity';


@Table({
    underscored:true,
    tableName: 'rota'
})
export class Rota extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codRota:number;

    @ForeignKey(()=> Trajeto)
    @Column
    codTrajeto: number;

    @Column
    nomeRota: string;

    @Column
    indProducao: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
