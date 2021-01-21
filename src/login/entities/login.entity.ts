import { Table, Model, PrimaryKey, Column, AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName: 'login'
})
export class Login extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
      codLogin: number;
    @Column
      codUsuario: number;
    @Column
      codIpOrigem: number;
    @Column
      dataCriacao: Date;
    
}
