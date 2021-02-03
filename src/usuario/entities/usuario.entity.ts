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

@Table({
  underscored: true,
  tableName: 'usuario',
})
export class Usuario extends Model {
 
  @PrimaryKey
  @AutoIncrement
  @Column
  codUsuario: number;

  @Column
  nomUsuario: string;

  @Column
  dscLogin: string;

  @Column
  dscSenha: string;

  @Column
  codTipoPerfil: string;

  @Column
  indAtivo: string;

  @ForeignKey(()=>Concessionaria)
  @Column
  codConcessionaria: number;
  @BelongsTo(()=>Concessionaria)
  concessionaria:Concessionaria;
  
  @ForeignKey(()=>Usuario)
  @Column
  codUsuarioCriacao: number;

}
