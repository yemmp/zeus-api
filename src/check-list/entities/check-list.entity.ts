import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName: 'check list'
})
export class CheckList  extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codCheckList:number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
