import {Table,Column,Model,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from 'sequelize-typescript'
import { CheckList } from 'src/check-list/entities/check-list.entity';

@Table({
    underscored:true,
    tableName: 'detalhe checklist'
})
export class DetalheChecklist extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codDetalheCheckList: number;

    @ForeignKey(()=>CheckList)
    @Column
    codCheckList: number;

    @BelongsTo(()=> CheckList)
    checkList: CheckList;

    @Column
    numSequencia: number;
    @Column
    dscTextoCheckList: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
