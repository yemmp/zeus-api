import { Table, Model, PrimaryKey, Column, AutoIncrement, ForeignKey} from 'sequelize-typescript'
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Table({
    underscored: true,
    tableName: 'login'
})
export class Login extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
      codLogin: number;
    @ForeignKey(()=>Usuario)   
    @Column
      codUsuario: number;
    @Column
      codIpOrigem: number;

    
}
