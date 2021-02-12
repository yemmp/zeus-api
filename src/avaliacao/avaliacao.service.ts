import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { Avaliacao } from './entities/avaliacao.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class AvaliacaoService {

  constructor(@InjectModel(Avaliacao) private avaliacaoModel: typeof Avaliacao) { }
  async create(createAvaliacaoDto: CreateAvaliacaoDto) {
    try {
      await this.avaliacaoModel.create(createAvaliacaoDto);
      console.log('Avaliacao Criada com Sucesso!');
      return 'Avaliacao Criada com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Avaliacao', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.avaliacaoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Avaliacoes');
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.avaliacaoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAvaliacao: id } });


    } catch (error) {
      console.error(`Erro ao Buscar Avaliacao #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    try {
      Avaliacao.update(updateAvaliacaoDto, { where: { codAvaliacao: id } }).then(() => {
        console.log(`Avaliacao #${id} Atualizada com Sucesso!`);
        return `Avaliacao #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {

      console.error(`Erro ao Atualizar Avaliacao #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async remove(id: number) {
    try {
      this.avaliacaoModel.destroy({ where: { codAvaliacao: id } });
      return `Avaliacao #${id} Deletada!`;
    } catch (error) {

      console.error(`Erro ao Deletar Avaliacao #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}
