import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Usuario extends Model{
   @Column
     idUsuario: number;
   @Column
     nomeUsuario: string;

}
