import { Module } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { InformacaoController } from './informacao.controller';

@Module({
  controllers: [InformacaoController],
  providers: [InformacaoService]
})
export class InformacaoModule {}
