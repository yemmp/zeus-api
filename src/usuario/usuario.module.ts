import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { TipoPerfilModule } from 'src/tipo-perfil/tipo-perfil.module';


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [SequelizeModule.forFeature([Usuario],),
TipoPerfilModule]
})
export class UsuarioModule {}
