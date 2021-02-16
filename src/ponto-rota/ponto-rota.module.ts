import { Module } from '@nestjs/common';
import { PontoRotaService } from './ponto-rota.service';
import { PontoRotaController } from './ponto-rota.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PontoRota } from './entities/ponto-rota.entity';
import { Rota } from 'src/rota/entities/rota.entity';
import { Midia } from 'src/Midia/entities/Midia.entity';

@Module({
  controllers: [PontoRotaController],
  providers: [PontoRotaService],
  imports: [SequelizeModule.forFeature([PontoRota]),Rota,Midia]
})
export class PontoRotaModule {}
