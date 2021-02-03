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
  codPerfil: string;

 

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
