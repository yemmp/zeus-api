import {Table,Model,Column,PrimaryKey,ForeignKey} from 'sequelize-typescript'

const { DataTypes } = require("sequelize");

@Table({
    underscored: true,
    tableName:'veiculo',
    createdAt:'datCriacao',
    updatedAt:'datAtualizacao',
    deletedAt:'datExclusao' 
})
export class Veiculo  extends Model{

    
    @Column
    codVeiculo:number;
    
    @Column({type :DataTypes.STRING(20)})
    numPlaca: string;

    @Column
    codModelo:number;

    @Column({type: DataTypes.STRING(1)})
    indAtivo:string;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao:number;
}
