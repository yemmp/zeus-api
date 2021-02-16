import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript';

@Table({
    underscored: true,
    tableName: 'Modelo',
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Modelo extends Model{

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codModelo: number;
    
    @ApiProperty()
    @Column
    nomModelo: string;
    
    @ApiProperty()
    @Column
    dscModelo: string;
    
    @ApiProperty()
    @Column
    indAtivo:string;
    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;



}
