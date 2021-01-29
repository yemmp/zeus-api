import { Module } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Formulario } from './entities/formulario.entity';
import { TestDrive } from 'src/test-drive/entities/test-drive.entity';

@Module({
  controllers: [FormularioController],
  providers: [FormularioService],
  imports: [SequelizeModule.forFeature([Formulario]),TestDrive]
})
export class FormularioModule {}
