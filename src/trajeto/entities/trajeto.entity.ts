import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { PontoTrajeto } from 'src/ponto-trajeto/entities/ponto-trajeto.entity';


@Table({
    underscored: true,
    tableName: 'trajeto'
})
export class Trajeto  extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codTrajeto: number;

    @Column
    nomTrajeto: string;

    @Column
    dscTrajeto: string;

    @Column
    qtdPontos: number;

    //@HasMany(()=>PontoTrajeto)

   // pontosTrajeto: PontoTrajeto[];

    @Column
    indAtivo: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;

   

}
