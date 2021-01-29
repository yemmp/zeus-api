import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaController } from './experiencia.controller';
import { ExperienciaService } from './experiencia.service';

describe('ExperienciaController', () => {
  let controller: ExperienciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienciaController],
      providers: [ExperienciaService],
    }).compile();

    controller = module.get<ExperienciaController>(ExperienciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
