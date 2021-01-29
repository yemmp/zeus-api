import {Table, Model, Column, PrimaryKey, AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName: 'avaliacao'
})
export class Avaliacao extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codAvaliacao: number
    
    @Column
    nomAvaliacao: string;

    @Column
    nomArquivo: string;

    @Column
    nomDiretorio: string;
}
