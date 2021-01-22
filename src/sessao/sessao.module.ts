import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [SessaoController],
  providers: [SessaoService],
  imports: [UsuarioModule]
})
export class SessaoModule {}
