import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'tipo fase'
})
export class TipoFase  extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codTipoFase: number;

    @Column
    nomTipoFase: string;

    @Column
    dscTipoFase: string;

    @Column
    indAtivo: number;

    @Column
    codUsuarioCriacao: number;

}
