import { ApiProperty } from '@nestjs/swagger';
import { Table,Model,PrimaryKey,Column,AutoIncrement} from 'sequelize-typescript'


@Table({
    underscored:true,
    tableName: 'concessionaria'
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
