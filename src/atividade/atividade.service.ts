import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Midia } from 'src/midia/entities/midia.entity';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Atividade } from './entities/atividade.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao', 'datAtualizacao', 'datExclusao', 'codAtividade', 'codFase', 'numSequencia', 'codTipoAtividade', 'codConcessionaria', 'codUsuarioCriacao', 'codInformacao']

@Injectable()
export class AtividadeService {
  constructor(@InjectModel(Atividade) private atividadeModel: typeof Atividade) { }


  async create(createAtividadeDto: CreateAtividadeDto) {
    try {
      await this.atividadeModel.create(createAtividadeDto);
      console.log('Atividade Criada com Sucesso!');
      return 'Atividade Criada com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar a Atividade', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.atividadeModel.findAll({
        include: { model: Midia, attributes: ['codTipoMidia', 'nomMidia'] },
        attributes: { exclude: [...exclude_attr] }
      });
    } catch (error) {
      console.error('Erro ao Procurar Atividades', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {

      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.atividadeModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codAtividade: id } });

    } catch (error) {

      console.error(`Erro ao Procurar Atividade #${id}`, error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    try {

      Atividade.update(updateAtividadeDto, { where: { codAtividade: id } })
        .then(() => { console.log(`Atividade #${id} Atualizada com Sucesso!`) });
      return `Atividade #${id} Atualizada com Sucesso! `;
    } catch (error) {
      console.error(`Erro ao Atualizar Atividade #${id}`, error.message);
      throw new BadRequestException();
    }


  }

  async remove(id: number) {
    try {

      const deleteAtividade = this.atividadeModel.destroy({ where: { codAtividade: id } });
      console.log(`Atividade #${id} Deletada! ${deleteAtividade} Registros Apagados!`);
      return `This action removes a #${id} atividade`;
    } catch (error) {
      console.error(`Erro ao Apagar Atividade #${id}`, error.message);
      throw new BadRequestException();

    }

  }
}
