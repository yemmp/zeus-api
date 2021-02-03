import {Table,Model,Column,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'informacao'
})
export class Informacao extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column
    codInformacao: number;
    
    @Column
    nomInformacao: string;

    @Column
    dscInformacao: string;
    
    @Column
    indAtivo: string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
}
