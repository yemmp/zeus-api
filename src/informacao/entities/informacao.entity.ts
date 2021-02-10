import { ApiProperty } from '@nestjs/swagger';
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany} from 'sequelize-typescript'
import { Atividade } from 'src/atividade/entities/atividade.entity';

@Table({
    underscored:true,
    tableName: 'informacao',  
    createdAt: 'dat_criacao',
    updatedAt: 'dat_atualizacao',
    deletedAt: 'dat_exclusao'
})
export class Informacao extends Model{
    
    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codInformacao: number;
    
    @ApiProperty()
    @Column
    nomInformacao: string;

    @ApiProperty()
    @Column
    dscInformacao: string;
    
    @ApiProperty()
    @Column
    indAtivo: string;

    @ApiProperty()
    @Column
    codConcessionaria: number;

    @ApiProperty()
    @Column
    codUsuarioCriacao: number;

    @HasMany(()=>Atividade)
    atividades: Atividade[];
}
