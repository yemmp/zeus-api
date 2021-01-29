import { Model,Table,Column,PrimaryKey,ForeignKey,AutoIncrement, BelongsTo } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";
import { TestDrive } from "src/test-drive/entities/test-drive.entity";

@Table({
    underscored:true,
    tableName: 'formulario'
})
export class Formulario extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    codFormulario:number;

    @ForeignKey(()=>TestDrive)
    @Column
    codTestDrive: number;

    @BelongsTo(()=>TestDrive)
    testDrive: TestDrive;

    @Column
    nomCliente: string;
    @Column
    numTelefone: number;

    @Column
    dscEmail:string;

    @Column
    dscRG: string;

    @Column
    numCelular: number;

    @Column
    numCPF: number;

    @Column
    numCNH: number;

    @Column
    datValidadeCNH: Date;

    @Column
    codConcessionaria: number;

    @Column
    codUsuarioCriacao: number;
    
}

