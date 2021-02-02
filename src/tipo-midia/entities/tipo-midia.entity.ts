import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'tipo midia'
})
export class TipoMidia extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codTipoMidia: number;

    @Column
    nomTipoMidia: string;

    @Column
    indAtivo: boolean;

    @Column
    codUsuarioCriacao: number;

    
}
