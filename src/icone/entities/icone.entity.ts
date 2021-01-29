import {Table,Column,Model,PrimaryKey,AutoIncrement} from 'sequelize-typescript'

@Table({
    underscored:true,
    tableName: 'icone'
})
export class Icone extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    codIcone: number;

    @Column
    nomIcone: string;

    @Column
    dscIcone: string;

    @Column
    nomArquivoImagem: string;
    @Column
    nomArquivoAudio: string;

    @Column
    nomDiretorio: string;
    @Column
    indAtivo: number;

    @Column
    codUsuarioCriacao: number;
}
