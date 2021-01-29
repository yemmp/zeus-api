import { Test, TestingModule } from '@nestjs/testing';
import { FaseExperienciaController } from './fase-experiencia.controller';
import { FaseExperienciaService } from './fase-experiencia.service';

describe('FaseExperienciaController', () => {
  let controller: FaseExperienciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaseExperienciaController],
      providers: [FaseExperienciaService],
    }).compile();

    controller = module.get<FaseExperienciaController>(FaseExperienciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
