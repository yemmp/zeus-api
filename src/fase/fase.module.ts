import { Module } from '@nestjs/common';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fase } from './entities/fase.entity';
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';

@Module({
  controllers: [FaseController],
  providers: [FaseService],
  imports: [SequelizeModule.forFeature([Fase]),TipoFase]
})
export class FaseModule {}
