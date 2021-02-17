import { Module } from '@nestjs/common';
import { TestDriveService } from './test-drive.service';
import { TestDriveController } from './test-drive.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestDrive } from './entities/test-drive.entity';
import { FormularioService } from 'src/formulario/formulario.service';
import { FormularioModule } from 'src/formulario/formulario.module';
import { Formulario } from 'src/formulario/entities/formulario.entity';

@Module({
  controllers: [TestDriveController],
  providers: [TestDriveService,FormularioService],
  imports: [SequelizeModule.forFeature([TestDrive]),Formulario]
})
export class TestDriveModule {}
