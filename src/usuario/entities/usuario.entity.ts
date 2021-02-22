
import { ApiProperty } from '@nestjs/swagger';
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

const { DataTypes } = require("sequelize");

@Table({
  underscored: true,
  tableName: 'usuario',
  createdAt: 'datCriacao',
  updatedAt: 'datAtualizacao',
  deletedAt: 'datExclusao'
})
export class Usuario extends Model {
  static find(arg0: (Usuario: any) => boolean): Usuario | PromiseLike<Usuario> {
    throw new Error('Method not implemented.');
  }
 
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codUsuario: number;

  @ApiProperty()
  @Column({type: DataTypes.STRING(100)})
  nomUsuario: string;

  @ApiProperty()
  @Column({type: DataTypes.STRING(50)})
  dscLogin: string;

  @ApiProperty()
  @Column({type: DataTypes.STRING(40)})
  dscSenha: string;

  //Perfis: MASTER, ADMINISTRADOR, CONFIGURADOR, ANALISTA
  @ApiProperty()
  @Column({type: DataTypes.STRING(5)})
  @Column({validate: {isIn: [["MA","AD","CO","AN"]]}})
  codTipoPerfil: string;
  
  @ApiProperty()
  @Column({type: DataTypes.STRING(1)})
  indAtivo: string;
  
  @ApiProperty()
  @ForeignKey(()=>Concessionaria)
  @Column
  codConcessionaria: number;
  @BelongsTo(()=>Concessionaria)
  concessionaria:Concessionaria;
  
  @ApiProperty()
  @ForeignKey(()=>Usuario)
  @Column
  codUsuarioCriacao: number;

}
