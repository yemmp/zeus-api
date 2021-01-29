import { Module } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { AtividadeController } from './atividade.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Atividade } from './entities/atividade.entity';
import { Midia } from 'src/midia/entities/midia.entity';
import { TipoFase } from 'src/tipo-fase/entities/tipo-fase.entity';
import { TipoMidia } from 'src/tipo-midia/entities/tipo-midia.entity';

@Module({
  controllers: [AtividadeController],
  providers: [AtividadeService],
  imports: [SequelizeModule.forFeature([Atividade]),Midia,TipoFase,TipoMidia]
})
export class AtividadeModule {}
