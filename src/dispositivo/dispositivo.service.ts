import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';
import { Dispositivo } from './entities/dispositivo.entity';

@Injectable()
export class DispositivoService {

  constructor(@InjectModel(Dispositivo)private dispositivoModel: typeof Dispositivo){}


  async create(createDispositivoDto: CreateDispositivoDto) {
    try {
      this.dispositivoModel.create(createDispositivoDto);
    } catch (error) {
      console.error('Erro ao Criar Dispositivo',error.message);
      throw new BadRequestException();
    }
    return 'Dispositivo Criado com Sucesso!';
  }

  async findAll() {
    try {
      return this.dispositivoModel.findAll();
      
    } catch (error) {
      console.error('Erro ao Buscar Dispositivos',error.message);
      throw new BadRequestException();
    }
  }

  async findOne(id: number) {
    try {
      return this.dispositivoModel.findOne({where:{codDispositivo:id}});
      
    } catch (error) {
      console.error(`Erro ao Buscar Dispositivo #${id}`,error.message);
      throw new BadRequestException();
    }
  }

  async update(id: number, updateDispositivoDto: UpdateDispositivoDto) {
    try {
      Dispositivo.update(updateDispositivoDto,{where:{codDispositivo:id}}).then(()=>{
        console.log(`Dispositivo #${id} Atualizado com Sucesso!`);
      });
    } catch (error) {
      console.error(`Erro ao Atualizar Dispositivo #${id}`,error.message);
      throw new BadRequestException();
      
    }
    return `Dispositivo #${id} Atualizado com Sucesso`;
  }

  async remove(id: number) {
    try {
      this.dispositivoModel.destroy({where:{codDispositivo:id}})
    } catch (error) {
      console.error(`Erro ao Deletar Dispositivo #${id}`,error.message);
      throw new BadRequestException();
    }
    return `Dispositivo #${id} Deletado!`;
  }
}
