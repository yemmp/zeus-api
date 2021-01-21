import { Module } from '@nestjs/common';
import { TipoPerfilService } from './tipo-perfil.service';
import { TipoPerfilController } from './tipo-perfil.controller';

@Module({
  controllers: [TipoPerfilController],
  providers: [TipoPerfilService]
})
export class TipoPerfilModule {}
