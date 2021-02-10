import { ApiProperty } from '@nestjs/swagger';
import {Table,Column,Model,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'icone',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Icone extends Model{

    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codIcone: number;

    
    @ApiProperty()
    @Column
    nomIcone: string;

    
    @ApiProperty()
    @Column
    dscIcone: string;

    
    @ApiProperty()
    @Column
    nomArquivoImagem: string;
    
    @ApiProperty()
    @Column
    nomArquivoAudio: string;

    
    @ApiProperty()
    @Column
    nomDiretorio: string;
    
    @ApiProperty()
    @Column
    indAtivo: string;

    
    @ApiProperty()
    @Column
    codUsuarioCriacao: number;
}
