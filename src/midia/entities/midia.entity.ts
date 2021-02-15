import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { BLOB } from "sequelize";
import {Table,Model,Column,PrimaryKey,AutoIncrement, HasMany} from "sequelize-typescript"
import { Atividade } from "src/atividade/entities/atividade.entity";

@Table({
    underscored:true,
    tableName:'midia',  
    createdAt: 'datCriacao',
    updatedAt: 'datAtualizacao',
    deletedAt: 'datExclusao'
})
export class Midia extends Model {

    @ApiProperty()
    @PrimaryKey
    @AutoIncrement
    @Column
    codMidia: number;

    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    nomMidia: string;
    
    @ApiProperty()
    @Column
    codTipoMidia: string;
    
    @ApiProperty()
    @Column
    nomArquivo: string;
    
    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    nomDiretorio: string;
    
    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    indAtivo: string;
    
    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    codConcessionaria: number;
    
    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    codUsuarioCriacao: number;

    @ApiProperty()
    @Column
    dscEncoding: string

    @ApiProperty()
    @Column
    dscSize: string

    @ApiProperty()
    @Column(BLOB("long"))
    file: any

    @HasMany(()=>Atividade)
    atividade: Atividade[];
 
}
