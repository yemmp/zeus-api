import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

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

    @Column
    indAtivo: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
