import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, PrimaryKey, Column, AutoIncrement, ForeignKey,BelongsTo} from 'sequelize-typescript'
import { Usuario } from 'src/usuario/entities/usuario.entity';

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName: 'login',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Login extends Model{


  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
    codLogin: number;

  @ApiProperty()
  @ForeignKey(()=>Usuario)   
  @Column
    codUsuario: number;
  @BelongsTo(()=>Usuario)
  usuario: Usuario;
  
  
  @ApiProperty()
  @Column({type: DataTypes.STRING(50)})
    codIpOrigem: string;

    
}
