import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import {Table,Model,Column,PrimaryKey,AutoIncrement} from "sequelize-typescript"

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
    nomArquivo: string;
    
    @ApiProperty()
    @Exclude({toPlainOnly: true})
    @Column
    nomDiretorio: string;
    
    @ApiProperty()
    @Column
    codTipoMidia: string;
    
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

   // constructor(partial: Partial<Midia>) {
   //     Object.assign(this, partial);
    //  }
    
}
