import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConcessionariaDto } from './dto/create-concessionaria.dto';
import { UpdateConcessionariaDto } from './dto/update-concessionaria.dto';
import { Concessionaria } from './entities/concessionaria.entity';

@Injectable()
export class ConcessionariaService {
  constructor(@InjectModel(Concessionaria) private concessionariaModel : typeof Concessionaria){}

  create(createConcessionariaDto: CreateConcessionariaDto) {
   this.concessionariaModel.create(createConcessionariaDto);
    console.log ('Concessionaria criada com sucesso');
  }

  async findAll() {
    const concessionarias = await this.concessionariaModel.findAll();
    console.info('Concessionarias', concessionarias);
    return concessionarias;
  }

  findOne(id: number) {
    return this.concessionariaModel.findOne({where:{ codConcessionaria:id}});;
  }

  update(id: number, updateConcessionariaDto: UpdateConcessionariaDto) {
    Concessionaria.update(updateConcessionariaDto,{
      where:{codConcessionaria:id}}).then(()=>
      console.log(`Concessionaria #${id} atualizadas com sucesso!`));
  }

  remove(id: number) {
    const deleteConcessionaria = this.concessionariaModel.destroy({
      where:{codConcessionaria : id}});
  }
}
