import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { ConcessionariaModule } from 'src/concessionaria/concessionaria.module';
import { CommonModule } from 'src/common/common.module';


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [
    SequelizeModule.forFeature([Usuario]),
    ConcessionariaModule],
  exports: [UsuarioService],
})
export class UsuarioModule { }
