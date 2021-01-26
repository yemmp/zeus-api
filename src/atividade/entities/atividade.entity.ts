import {Table,Model,Column,PrimaryKey,ForeignKey,AutoIncrement} from 'sequelize-typescript'
import { Fase } from 'src/fase/entities/fase.entity';
import { Midia } from 'src/midia/entities/midia.entity';
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';
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
@ForeignKey(()=> Fase)
@Column
 codFase: number;

@ForeignKey(()=> Midia)
@Column 
 codMidia: number;

@ForeignKey(()=> TipoFase)
@Column
 codTipoFase: number;

@ForeignKey(()=>TipoMidia)
@Column
 codTipoMidia: number;

@Column
 numSequencia: number;

@Column
 nomAtividade: string;

@Column
 codTipoAtividade: string;

@Column
 numPosicaoX: number;

@Column
 numPosicaoY: number;

@Column
 codConcessionaria: number;

@Column
 codUsuarioCriacao: number;



}
