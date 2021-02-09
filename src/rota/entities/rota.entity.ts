import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import { PontoRota } from 'src/ponto-rota/entities/ponto-rota.entity';
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

    @BelongsTo(()=>Trajeto)
    trajeto: Trajeto;

    //@HasMany(()=>PontoRota)
    //pontosRota : PontoRota[];

    @Column
    nomRota: string;

    @Column
    indAtivo: string;
    
    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
