import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaDispositivoController } from './experiencia-dispositivo.controller';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';

describe('ExperienciaDispositivoController', () => {
  let controller: ExperienciaDispositivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienciaDispositivoController],
      providers: [ExperienciaDispositivoService],
    }).compile();

    controller = module.get<ExperienciaDispositivoController>(ExperienciaDispositivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
