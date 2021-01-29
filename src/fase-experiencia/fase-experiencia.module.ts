import { Module } from '@nestjs/common';
import { FaseExperienciaService } from './fase-experiencia.service';
import { FaseExperienciaController } from './fase-experiencia.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FaseExperiencia } from './entities/fase-experiencia.entity';
import { Experiencia } from 'src/experiencia/entities/experiencia.entity';
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';

@Module({
  controllers: [FaseExperienciaController],
  providers: [FaseExperienciaService],
  imports: [SequelizeModule.forFeature([FaseExperiencia]),Experiencia,TipoFase]
})
export class FaseExperienciaModule {}
