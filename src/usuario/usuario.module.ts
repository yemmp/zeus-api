import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { TipoPerfilModule } from 'src/tipo-perfil/tipo-perfil.module';
import { ConcessionariaModule } from 'src/concessionaria/concessionaria.module';


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [SequelizeModule.forFeature([Usuario],),
TipoPerfilModule,
ConcessionariaModule]
})
export class UsuarioModule {}
