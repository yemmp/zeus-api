import { Table,Model,PrimaryKey,Column,AutoIncrement} from 'sequelize-typescript'


@Table({
    underscored:true,
    tableName: 'concessionaria'
})
export class Concessionaria extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
      codConcessionaria: number;
    @Column
      nomConcessionaria: string;
    @Column
      codUsuarioCriacao: number;
    @Column
      dataCriacao: Date;
}
