import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Concessionaria } from 'src/concessionaria/entities/concessionaria.entity';
import { TipoPerfil } from 'src/tipo-perfil/entities/tipo-perfil.entity';

@Table({
  underscored: true,
  tableName: 'usuario',
})
export class Usuario extends Model {
 
  @PrimaryKey
  @AutoIncrement
  @Column
  codUsuario: number;

  @ForeignKey(() => TipoPerfil)
  @Column
  codPerfil: string;

  @BelongsTo(() => TipoPerfil)
  tipoPerfil: TipoPerfil;

  @Column
  nomeUsuario: string;

  @Column
  dscLogin: string
  
  @Column
  indAtivo: boolean;
 
  @ForeignKey(() => Concessionaria)
  @Column
  codConcessionaria: number;

  @BelongsTo(() => Concessionaria)
  concessionaria: Concessionaria;
  
 @ForeignKey(() => Usuario)
  @Column
  codUsuarioCriacao: number;
  

}
