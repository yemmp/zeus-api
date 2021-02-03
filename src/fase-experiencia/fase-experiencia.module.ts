import { Module } from '@nestjs/common';
import { FaseExperienciaService } from './fase-experiencia.service';
import { FaseExperienciaController } from './fase-experiencia.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FaseExperiencia } from './entities/fase-experiencia.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';

@Module({
  controllers: [FaseExperienciaController],
  providers: [FaseExperienciaService],
  imports: [SequelizeModule.forFeature([FaseExperiencia]),Experiencia,]
})
export class FaseExperienciaModule {}
