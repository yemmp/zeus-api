import { Module } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoController } from './avaliacao.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Atividade } from 'src/atividade/entities/atividade.entity';
import { Avaliacao } from './entities/avaliacao.entity';

@Module({
  controllers: [AvaliacaoController],
  providers: [AvaliacaoService],
  imports: [SequelizeModule.forFeature([Avaliacao])]
})
export class AvaliacaoModule {}
