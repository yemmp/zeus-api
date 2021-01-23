import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { Sessao } from './entities/sessao.entity';

@Injectable()
export class SessaoService {
  constructor(@InjectModel(Sessao) private sessaoModel: typeof Sessao){}
  create(createSessaoDto: CreateSessaoDto) {
    this.sessaoModel.create(createSessaoDto);
    console.log('Sessao criada com sucesso');
    return 'Ok'
  }

  findAll() {
    return this.sessaoModel.findAll();
  }

  findOne(id: number) {
    return this.sessaoModel.findOne({where:{codSessao:id}});
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    Sessao.update(updateSessaoDto,{
      where: { codSessao: id }}).then(()=>{
        console.log(`Sessão nº=${id}atualizada com sucesso `)
      });
  }

  remove(id: number) {
    const deleteSession = this.sessaoModel.destroy({
      where: {codSessao:id}});
      console.log  `Registros da sessão #${id} removidos!`
  }
}
