import {Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo } from 'sequelize-typescript'
import { CheckList } from 'src/check-list/entities/check-list.entity';

@Table({
    underscored:true,
    tableName: 'experiencia'
})
export class Experiencia extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codExperiencia: number;

    @ForeignKey(()=>CheckList)
    @Column
    codCheckList: number;

    @BelongsTo(()=>CheckList)
    checkList: CheckList;

    @Column
    indAtivo: number;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao:number;
}
