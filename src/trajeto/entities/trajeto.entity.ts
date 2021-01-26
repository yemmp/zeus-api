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
    nomeTrajeto: string;

    @Column
    dscTrajeto: string;

    @Column
    qtdPontos: number;

    @Column
    indAtivo: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
