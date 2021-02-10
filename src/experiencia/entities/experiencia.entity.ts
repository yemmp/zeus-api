import { ApiProperty } from '@nestjs/swagger';
import {Table,Column,Model,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo } from 'sequelize-typescript'
import { CheckList } from 'src/check-list/entities/check-list.entity';

@Table({
    underscored:true,
    tableName: 'experiencia',  
    createdAt: 'dat_criacao',
  updatedAt: 'dat_atualizacao',
  deletedAt: 'dat_exclusao'
})
export class Experiencia extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codExperiencia: number;

    @ApiProperty()
    @ForeignKey(()=>CheckList)
    @Column
    codCheckList: number;

    @BelongsTo(()=>CheckList)
    checkList: CheckList;

    @ApiProperty()
    @Column
    indAtivo: string;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao:number;
}
