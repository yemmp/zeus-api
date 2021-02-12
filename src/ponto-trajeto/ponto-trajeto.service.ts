import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePontoTrajetoDto } from './dto/create-ponto-trajeto.dto';
import { UpdatePontoTrajetoDto } from './dto/update-ponto-trajeto.dto';
import { PontoTrajeto } from './entities/ponto-trajeto.entity';

const EXCLUDED_APP_ATTRIBUTE = ['']

@Injectable()
export class PontoTrajetoService {

  constructor(@InjectModel(PontoTrajeto) private pontoTrajetoModel: typeof PontoTrajeto) { }

  async create(createPontoTrajetoDto: CreatePontoTrajetoDto) {
    try {

      await this.pontoTrajetoModel.create(createPontoTrajetoDto);
      console.log('Ponto-Trajeto Criado com Sucesso!');
      return 'Ponto-Trajeto Criado com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Ponto-Trajeto', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTE : []
      return this.pontoTrajetoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {

      console.error('Erro ao Buscar Pontos-Trajeto', error.message);
      throw new BadRequestException();

    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTE : []
      return this.pontoTrajetoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codPontoTrajeto: id } });
    } catch (error) {
      console.error(`Erro ao Buscar Ponto-Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updatePontoTrajetoDto: UpdatePontoTrajetoDto) {
    try {
      PontoTrajeto.update(updatePontoTrajetoDto, { where: { codPontoTrajeto: id } })
        .then(() => { console.log(`Ponto-Trajeto #${id} Atualizado com Sucesso!`) });
    } catch (error) {
      console.error(`Erro ao Atualizar Ponto-Trajeto #${id}`, error.message);
      throw new BadRequestException();
    }
    return `Ponto-Trajeto #${id} Atualizado com Sucesso!`;
  }

  async remove(id: number) {
    try {
      const deletePontoTrajeto = this.pontoTrajetoModel.destroy({ where: { codPontoTrajeto: id } });
      console.log(`Ponto-Trajeto #${id} Deletado! ${deletePontoTrajeto} Registros Apagados!`);
    } catch (error) {
      console.error(`Erro ao Deletar Ponto-Trajeto #${id}`, error.message);
    }
    return `Ponto-Trajeto #${id} Deletado!`;
  }
}
