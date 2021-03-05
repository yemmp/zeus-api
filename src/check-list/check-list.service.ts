import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DetalheChecklist } from 'src/detalhe-checklist/entities/detalhe-checklist.entity';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { CheckList } from './entities/check-list.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao', 'datAtualizacao', 'datExclusao', 'indAtivo', 'codConcessionaria', 'codUsuarioCriacao']

@Injectable()
export class CheckListService {

  constructor(@InjectModel(CheckList) private checkListModel: typeof CheckList) { }

  async create(createCheckListDto: CreateCheckListDto) {
    try {
      await this.checkListModel.create(createCheckListDto);
      console.log('Check-List Criado com Sucesso!');
      return 'Check-List Criado com Sucesso!';
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao criar Check-List`
        },
        HttpStatus.BAD_REQUEST,
      );

    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.checkListModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Check-Lists`
        },
        HttpStatus.BAD_REQUEST,
      );

    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []

      return this.checkListModel.findOne({
        attributes: {
          exclude: [...exclude_attr]
        },
        include: [
          { model: DetalheChecklist, attributes: ["numSequencia", "dscTextoCheckList"] }
        ],
        where: { codCheckList: id }
      });

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao buscar Check-List #${id}`
        },
        HttpStatus.BAD_REQUEST,
      );

    }
  }

  async update(id: number, updateCheckListDto: UpdateCheckListDto) {
    try {
      CheckList.update(updateCheckListDto, { where: { codCheckList: id } }).then(() => {
        console.log(`Check-List #${id} Atualizado com Sucesso`);
        return `Check-List #${id} Atualizada com Sucesso`;
      })
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao Atualizar Check-List #${id}`
        },
        HttpStatus.BAD_REQUEST,
      );

    }

  }

  remove(id: number) {
    try {
      this.checkListModel.destroy({ where: { codCheckList: id } });
      return `Check-List #${id} Deletada!`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Erro ao deletar Check-list #${id}`
        },
        HttpStatus.BAD_REQUEST,
      );

    }
  }
}
