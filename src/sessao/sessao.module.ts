import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Sessao } from './entities/sessao.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [SessaoController],
  providers: [SessaoService],
  imports: [SequelizeModule.forFeature([Sessao]),
  UsuarioModule]
})
export class SessaoModule {}
