import {Table,Column,Model,PrimaryKey,ForeignKey,AutoIncrement,BelongsTo} from 'sequelize-typescript'
import { Icone } from 'src/icone/entities/icone.entity';
import { Rota } from 'src/rota/entities/rota.entity';

@Table({
    underscored: true,
    tableName: 'ponto rota'
})
export class PontoRota extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codPontoRota: number;

    @ForeignKey(()=>Rota)
    @Column
    codRota: number

    @BelongsTo(()=>Rota)
    rota:Rota;

    @ForeignKey(()=>Icone)
    @Column
    codIconeMidia: number;

    @BelongsTo(()=>Icone)
    icone: Icone;

    @Column
    indIconeMidia: number;

    @Column
    numSequencia: number;

    @Column
    nomPontoRota: string;

    @Column
    dscTextoPontoRota: string;

    @Column
    numPosicaoX: number;

    @Column
    numPosicaoY: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;

    
}