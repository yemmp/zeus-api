import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CheckList } from 'src/check-list/entities/check-list.entity';
import { DetalheChecklist } from 'src/detalhe-checklist/entities/detalhe-checklist.entity';
import { FaseExperiencia } from 'src/fase-experiencia/entities/fase-experiencia.entity';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { Experiencia } from './entities/experiencia.entity';

const EXCLUDED_APP_ATTRIBUTES = ['datCriacao', 'datExclusao', 'indAtivo', 'codConcessionaria', 'codUsuarioCriacao', 'codFaseAvancada']


@Injectable()
export class ExperienciaService {
  constructor(@InjectModel(Experiencia) private experienciaModule: typeof Experiencia) { }

  async create(createExperienciaDto: CreateExperienciaDto) {
    try {
      await this.experienciaModule.create(createExperienciaDto);
      console.log('Experiencia Criada com Sucesso');
      return 'Experiencia Criada com Sucesso';
    } catch (error) {
      console.error('Erro ao Criar Experiencia', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      let listExperiencias = await this.experienciaModule.findAll({
        include: [
          {
            model: CheckList,
            include: [
              {
                model: DetalheChecklist,
                right: true,
                attributes: ['dscTextoCheckList']
              }
            ]
          },
          {
            model: FaseExperiencia,
            attributes: ['codFase', 'codTipoFase','datAtualizacao']

          }
        ],
        attributes: { exclude: [...exclude_attr] },
        order: [
          [{ model: FaseExperiencia, 'as': 'faseExperiencia' }, 'numSequencia', 'ASC']
        ]
      });

      console.log(listExperiencias)


      return listExperiencias.map(experiencia => {
        const { codExperiencia, nomExperiencia, updatedAt,checkList, faseExperiencia } = experiencia
        const checkListCopy = checkList.detalhesCheckList.map(detalhe => detalhe.dscTextoCheckList)
        return {
          codExperiencia,
          nomExperiencia,
          updatedAt, 'as': 'datAtualizacao',
          "checklist": checkListCopy,
          faseExperiencia
        }
      })

    } catch (error) {
      console.error('Erro ao Buscar Experiencias', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    Experiencia.belongsTo(CheckList);
    CheckList.hasMany(DetalheChecklist);
    DetalheChecklist.belongsTo(CheckList);

    try{
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES:[];

      return this.experienciaModule.findOne({
        include:[
          {
            model:CheckList,
            include:[
              {model: DetalheChecklist,
                attributes: ['dscTextoCheckList'],
              },
            ],
          },
          {
            model: FaseExperiencia,
            attributes:['codFase','codTipoFase','datAtualizacao']
          }
        ], attributes:{exclude:[...exclude_attr]},
        order:[
          [{model: DetalheChecklist, 'as': 'detalhesCheckList'}, 'numSequencia','ASC'],
          [{model: FaseExperiencia, 'as': 'faseExperiencia'}, 'numSequencia', 'ASC']
        ],
        where:{codExperiencia: id}
      });

    } catch (error) {

      console.error(`Erro ao Buscar Experiencia #${id}`,error.message);
      throw new BadRequestException();

    }
  }

  async update(id: number, updateExperienciaDto: UpdateExperienciaDto) {
    try {
      Experiencia.update(updateExperienciaDto, { where: { codExperiencia: id } }).then(() => {
        console.log(`Experiencia #${id} Atualizada com Sucesso!`)
        return `Experiencia #${id} Atualizada com Sucesso`;
      });
    } catch (error) {
      console.error(`Erro ao Atualizar Experiencia #${id}`, error.message);
      throw new BadRequestException();
    }
  }
//
  remove(id: number) {
    try {
      this.experienciaModule.destroy({ where: { codExperiencia: id } });
      return `Experiencia #${id} Deletada!`;
    } catch (error) {
      console.error(`Erro ao Deletar Experiencia #${id}`, error.message);
    }
  }
}
