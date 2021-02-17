import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Veiculo } from './entities/veiculo.entity';
import { Modelo } from 'src/modelo/entities/modelo.entity';

@Module({
  controllers: [VeiculoController],
  providers: [VeiculoService],
  imports:[SequelizeModule.forFeature([Veiculo]),Modelo]
})
export class VeiculoModule {}
