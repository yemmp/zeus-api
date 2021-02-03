import { Module } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { AtividadeController } from './atividade.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Atividade } from './entities/atividade.entity';
import { Midia } from 'src/midia/entities/midia.entity';
import { FaseExperiencia } from 'src/fase-experiencia/entities/fase-experiencia.entity';

@Module({
  controllers: [AtividadeController],
  providers: [AtividadeService],
  imports: [SequelizeModule.forFeature([Atividade]),Midia,FaseExperiencia,]
})
export class AtividadeModule {}
