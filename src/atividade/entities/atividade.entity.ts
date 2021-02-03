import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo} from 'sequelize-typescript'
//import { FaseExperiencia } from 'src/fase-experiencia/entities/fase-experiencia.entity';
import { Midia } from 'src/midia/entities/midia.entity';



@Table({
    underscored: true,
    tableName: "atividade"
})
export class Atividade extends Model{

@PrimaryKey
@AutoIncrement
@Column
codAtividade: number;

/*
@ForeignKey(()=>FaseExperiencia)
@Column
codFase: number;

@BelongsTo(()=>FaseExperiencia)
faseExperiencia: FaseExperiencia;
*/
@ForeignKey(()=> Midia)
@Column 
 codMidia: number;

 @BelongsTo(()=>Midia)
midia: Midia;


@Column
 codTipoMidia: number;


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
