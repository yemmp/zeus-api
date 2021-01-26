import { Module } from '@nestjs/common';
import { RotaFaseService } from './rota-fase.service';
import { RotaFaseController } from './rota-fase.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RotaFase } from './entities/rota-fase.entity';
import { Rota } from 'src/rota/entities/rota.entity';
import { Fase } from 'src/fase/entities/fase.entity';

@Module({
  controllers: [RotaFaseController],
  providers: [RotaFaseService],
  imports: [SequelizeModule.forFeature([RotaFase]),Rota,Fase]
})
export class RotaFaseModule {}
