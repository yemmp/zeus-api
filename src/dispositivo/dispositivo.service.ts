import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';

const EXCLUDED_APP_ATTRIBUTES = ['']

@Injectable()
export class DispositivoService {

  constructor(@InjectModel(Dispositivo) private dispositivoModel: typeof Dispositivo) { }


  async create(createDispositivoDto: CreateDispositivoDto) {
    try {
      await this.dispositivoModel.create(createDispositivoDto);
      console.log('Dispositivo Criado com Sucesso!');
      return 'Dispositivo Criado com Sucesso!';
    } catch (error) {
      console.error('Erro ao Criar Dispositivo', error.message);
      throw new BadRequestException();
    }
  }

  async findAll(projecao = 'APP') {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.dispositivoModel.findAll({ attributes: { exclude: [...exclude_attr] } });

    } catch (error) {
      console.error('Erro ao Buscar Dispositivos', error.message);
      throw new BadRequestException();
    }
  }

  async findOne(projecao = 'APP', id: number) {
    try {
      const exclude_attr = (projecao == 'APP') ? EXCLUDED_APP_ATTRIBUTES : []
      return this.dispositivoModel.findOne({ attributes: { exclude: [...exclude_attr] }, where: { codDispositivo: id } });

    } catch (error) {
      console.error(`Erro ao Buscar Dispositivo #${id}`, error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    try {
      Dispositivo.update(updateDispositivoDto, { where: { codDispositivo: id } }).then(() => {
        console.log(`Dispositivo #${id} Atualizado com Sucesso!`);
        return `Dispositivo #${id} Atualizado com Sucesso`;
      });
    } catch (error) {
      console.error(`Erro ao Atualizar Dispositivo #${id}`, error.message);
      throw new BadRequestException();

    }
  }

  async remove(id: number) {
    try {
      this.dispositivoModel.destroy({ where: { codDispositivo: id } })
      return `Dispositivo #${id} Deletado!`;
    } catch (error) {
      console.error(`Erro ao Deletar Dispositivo #${id}`, error.message);
      throw new BadRequestException();
    }
  }
}
