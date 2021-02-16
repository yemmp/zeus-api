import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement,ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Table({
    underscored:true,
    tableName:'relatorio',
    createdAt:'datCriacao',
    updatedAt:'datAtualizacao',
    deletedAt:'datExclusao'
})
export class Relatorio extends Model{
    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codRelatorio:number;
    
    @ApiProperty()
    @Column
    indTipoRelatorio: string;
    
    @ApiProperty()
    @ForeignKey(()=>Usuario)
    @Column
    codUsuarioCriacao:number;

    @BelongsTo(()=>Usuario)
    usuario:Usuario;
    
    @ApiProperty()
    @Column
    codConcessionaria:number;
    
}
