import { ApiProperty } from '@nestjs/swagger';
import { Table,Model,PrimaryKey,Column,AutoIncrement} from 'sequelize-typescript'


@Table({
    underscored:true,
    createdAt: 'dat_criacao',
    updatedAt: 'dat_atualizacao',
    deletedAt: 'dat_exclusao'
})
export class Concessionaria extends Model{

  @ApiProperty()
  @PrimaryKey
  @AutoIncrement
  @Column
    codConcessionaria: number;

  @ApiProperty()
  @Column
    nomConcessionaria: string;

  @ApiProperty()
  @Column
    codUsuarioCriacao: number;
   
}
