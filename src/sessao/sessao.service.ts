import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { Sessao } from './entities/sessao.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class SessaoService {
  constructor(@InjectModel(Sessao) private sessaoModel: typeof Sessao){}
  async create(createSessaoDto: CreateSessaoDto) {
    try {
      this.sessaoModel.create(createSessaoDto);
      
    } catch (error) {
      console.error('Erro ao Criar Sessao');
      throw new BadRequestException();
    }
    console.log('Sessao criada com sucesso');
    return 'Sessao Criada com Sucesso';
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.sessaoModel.findAll({attributes:{exclude:[...exclude_attr]}});
      
    } catch (error) {
      console.error('Erro ao Buscar Sessoes',error.message);
      throw new BadRequestException();

    }
  }

  async findOne(projecao = 'APP',id: number) {
    try {
      const exclude_attr = (projecao == 'APP')? EXCLUDED_APP_ATTRIBUTES:[]
      return this.sessaoModel.findOne({attributes:{exclude:[...exclude_attr]},where:{codSessao:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Sessao #${id}`,error.message);
      throw new BadRequestException();
      
    }
  }

  async update(id: number, updateSessaoDto: UpdateSessaoDto) {
    try {
      Sessao.update(updateSessaoDto,{
        where: { codSessao: id }}).then(()=>{
          console.log(`Sessão nº=${id}atualizada com sucesso `);
        });
      
    } catch (error) {
      console.error(`Erro ao Atualizar Sessao nº=${id}`, error.message);
      throw new BadRequestException();
    }
    return `Sessao nº=${id} Atualizada com Sucesso`;
  }

  async remove(id: number) {
    try {
      const deleteSession = this.sessaoModel.destroy({
        where: {codSessao:id}});
        console.log  `Registros da sessão #${id} removidos!`
      
    } catch (error) {
      console.error(`Erro ao Remover Sessao nº=${id}`);
      throw new BadRequestException();
    }
    return `Sessao nº=${id} Deletada!`;
  }
}
