import { Table, Model, PrimaryKey, Column, AutoIncrement } from 'sequelize-typescript'
import { underscoredIf } from 'sequelize/types/lib/utils'

@Table({
    underscored: true,
    tableName: 'sessao'
})
export class Sessao extends  Model{

    @PrimaryKey
    @AutoIncrement
    @Column
      codSessao: number;
    @Column
      codUsuario: number;
    @Column
      dataInicio: Date;
    @Column
      dataFim: Date;
    @Column
      dscTokenAcesso: string;
    @Column
      codIpOrigem: number;
    @Column
      dscSoAcesso: string;

}
