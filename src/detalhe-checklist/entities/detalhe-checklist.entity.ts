import { ApiProperty } from '@nestjs/swagger';
import {Table,Column,Model,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from 'sequelize-typescript'
import { CheckList } from 'src/check-list/entities/check-list.entity';

const { DataTypes } = require("sequelize");
@Table({
    underscored:true,
    tableName: 'detalhe_check_list',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class DetalheChecklist extends Model{

    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codDetalheCheckList: number;

    
    @ApiProperty()
    @ForeignKey(()=>CheckList)
    @Column
    codCheckList: number;

    @BelongsTo(()=> CheckList)
    checkList: CheckList;

    
    @ApiProperty()
    @Column
    numSequencia: number;
    
    @ApiProperty()
    @Column({type:DataTypes.STRING(100)})
    dscTextoCheckList: string;

    
    @ApiProperty()
    @Column
    codConcessionaria: number;

    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}
