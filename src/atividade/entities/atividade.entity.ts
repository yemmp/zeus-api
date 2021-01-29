import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo} from 'sequelize-typescript'
import { Midia } from 'src/midia/entities/midia.entity';
import { TipoMidia } from 'src/tipo-midia/entities/tipo-midia.entity';


@Table({
    underscored: true,
    tableName: "atividade"
})
export class Atividade extends Model{

@PrimaryKey
@AutoIncrement
@Column
  codAtividade: number;

@ForeignKey(()=> Midia)
@Column 
 codMidia: number;

 @BelongsTo(()=>Midia)
midia: Midia;

@ForeignKey(()=>TipoMidia)
@Column
 codTipoMidia: number;

@BelongsTo(()=>TipoMidia)
tipoMidia: TipoMidia;

@Column
 numSequencia: number;

@Column
 nomAtividade: string;

@Column
 codTipoAtividade: string;


@Column
 codConcessionaria: number;

@Column
 codUsuarioCriacao: number;



}
