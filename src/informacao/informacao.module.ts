import { Module } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { InformacaoController } from './informacao.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Informacao } from './entities/informacao.entity';
import { Atividade } from 'src/atividade/entities/atividade.entity';
import { AtividadeModule } from 'src/atividade/atividade.module';

@Module({
  controllers: [InformacaoController],
  providers: [InformacaoService],
  imports: [SequelizeModule.forFeature([Informacao]),AtividadeModule]
})
export class InformacaoModule {}
