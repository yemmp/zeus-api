import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Modelo } from './entities/modelo.entity';

@Module({
  controllers: [ModeloController],
  providers: [ModeloService],
  imports:[SequelizeModule.forFeature([Modelo])]
})
export class ModeloModule {}
