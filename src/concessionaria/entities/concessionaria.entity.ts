import { ApiProperty } from '@nestjs/swagger';
import { Table,Model,PrimaryKey,Column,AutoIncrement, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Regiao } from 'src/regiao/entities/regiao.entity';

const { DataTypes } = require("sequelize");


@Table({
    underscored:true,
    tableName: 'concessionaria',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Concessionaria extends Model{

  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
    codConcessionaria: number;

  @ApiProperty()
  @Column({type: DataTypes.STRING(100)})
    nomConcessionaria: string;

  @ApiProperty()
  @ForeignKey(()=> Regiao)
  @Column
  codRegiao: number;

  @BelongsTo(()=>Regiao)
  regiao:Regiao;


  @ApiProperty()
  @Column
    codUsuarioCriacao: number;
   
}
