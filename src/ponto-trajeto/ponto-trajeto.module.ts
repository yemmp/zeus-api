import { Module } from '@nestjs/common';
import { PontoTrajetoService } from './ponto-trajeto.service';
import { PontoTrajetoController } from './ponto-trajeto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PontoTrajeto } from './entities/ponto-trajeto.entity';

@Module({
  controllers: [PontoTrajetoController],
  providers: [PontoTrajetoService],
  imports: [SequelizeModule.forFeature([PontoTrajeto])]
})
export class PontoTrajetoModule {}
