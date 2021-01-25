import { Table, Model, PrimaryKey, Column, AutoIncrement, ForeignKey } from 'sequelize-typescript'
import { underscoredIf } from 'sequelize/types/lib/utils'
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Table({
    underscored: true,
    tableName: 'sessao'
})
export class Sessao extends  Model{

    @PrimaryKey
    @AutoIncrement
    @Column
      codSessao: number;
    
    @ForeignKey(()=>Usuario)
    @Column
      codUsuario: number;
    @Column
      dscTokenAcesso: string;
    @Column
      codIpOrigem: number;
    @Column
      dscSoAcesso: string;

}
