import { Module } from '@nestjs/common';
import { ExperienciaService } from './experiencia.service';
import { ExperienciaController } from './experiencia.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Experiencia } from './entities/experiencia.entity';
import { CheckList } from 'src/check-list/entities/check-list.entity';

@Module({
  controllers: [ExperienciaController],
  providers: [ExperienciaService],
  imports: [SequelizeModule.forFeature([Experiencia]),CheckList]
})
export class ExperienciaModule {}
