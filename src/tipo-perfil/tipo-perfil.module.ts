import { Module } from '@nestjs/common';
import { TipoPerfilService } from './tipo-perfil.service';
import { TipoPerfilController } from './tipo-perfil.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoPerfil } from './entities/tipo-perfil.entity';

@Module({
  controllers: [TipoPerfilController],
  providers: [TipoPerfilService],
  imports: [SequelizeModule.forFeature([TipoPerfil])]
})
export class TipoPerfilModule {}
