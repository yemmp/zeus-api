import { Module } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Formulario } from './entities/formulario.entity';

@Module({
  controllers: [FormularioController],
  providers: [FormularioService],
  imports: [SequelizeModule.forFeature([Formulario]),],
  exports: [FormularioService]
})
export class FormularioModule {}
