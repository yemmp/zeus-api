import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAvaliacaoDispositivoDto } from './dto/create-avaliacao-dispositivo.dto';
import { UpdateAvaliacaoDispositivoDto } from './dto/update-avaliacao-dispositivo.dto';
import { AvaliacaoDispositivo } from './entities/avaliacao-dispositivo.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao','datAtualizacao','datExclusao']

@Injectable()
export class AvaliacaoDispositivoService {

  constructor(@InjectModel(AvaliacaoDispositivo) private avaliacaoDispositivoModule: typeof AvaliacaoDispositivo) { }

  async create(createAvaliacaoDispositivoDto: CreateAvaliacaoDispositivoDto) {
    try {
      await this.avaliacaoDispositivoModule.create(createAvaliacaoDispositivoDto);
      console.log('Avaliacao-Dispositivo Criada com Sucesso!');
      return 'Avaliacao-Dispositivo Criada com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Avaliacao-Dispositvo', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.avaliacaoDispositivoModule.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Avaliacoes-Dispositivo', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.avaliacaoDispositivoModule.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAvaliacaoDispositivo: id } });

    } catch (error) {
      console.error(`Erro ao Buscar Avaliacao-Dispositivo #${id}`, error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateAvaliacaoDispositivoDto: UpdateAvaliacaoDispositivoDto) {
    try {
      AvaliacaoDispositivo.update(updateAvaliacaoDispositivoDto, { where: { codAvaliacaoDispositivo: id } }).then(() => {
        console.log(`Avaliacao-Dispositivo #${id} Atualizada com Sucesso!`);
        return `Atualizacao-Dispositivo #${id} Atualizada com Sucesso!`;
      })
    } catch (error) {
      console.error(`Erro ao Atualizar Avaliacao-Dispositivo #${id}`, error.message);
      throw new BadRequestException();
    }

  }

  async remove(id: number) {
    try {
      this.avaliacaoDispositivoModule.destroy({ where: { codAvaliacaoDispositivo: id } });
      return `Avaliacao-Dispositivo #${id} Deletada!`;
    } catch (error) {
      console.error(`Erro ao Deletar Avaliacao-Dispositivo #${id}`, error.messsage);
      throw new BadRequestException();
    }
  }
}
