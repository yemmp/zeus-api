import { Module } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { InformacaoController } from './informacao.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Informacao } from './entities/informacao.entity';

@Module({
  controllers: [InformacaoController],
  providers: [InformacaoService],
  imports: [SequelizeModule.forFeature([Informacao])]
})
export class InformacaoModule {}
