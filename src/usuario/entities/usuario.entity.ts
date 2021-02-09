
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

@Table({
  underscored: true,
  tableName: 'usuario',
  createdAt: 'dat_criacao',
  updatedAt: 'dat_atualizacao',
  deletedAt: 'dat_exclusao'
})
export class Usuario extends Model {
 
  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
  codUsuario: number;

  @ApiProperty()
  @Column
  nomUsuario: string;

  @ApiProperty()
  @Column
  dscLogin: string;

  @ApiProperty()
  @Column
  dscSenha: string;

  //Perfis: MASTER, ADMINISTRADOR, CONFIGURADOR, ANALISTA
  @ApiProperty()
  @Column({validate: {isIn: [["MA","AD","CO","AN"]]}})
  codTipoPerfil: string;
  
  @ApiProperty()
  @Column
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
