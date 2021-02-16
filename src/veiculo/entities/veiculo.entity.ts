import {Table,Model,Column,PrimaryKey,ForeignKey} from 'sequelize-typescript'

@Table({
    underscored: true,
    tableName:'veiculo',
    createdAt:'datCriacao',
    updatedAt:'datAtualizacao',
    deletedAt:'datExclusao' 
})
export class Veiculo  extends Model{

    codVeiculo:number;
    
    numPlaca: string;
}
