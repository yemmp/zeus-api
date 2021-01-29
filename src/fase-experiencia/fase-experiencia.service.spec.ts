import { Test, TestingModule } from '@nestjs/testing';
import { FaseExperienciaService } from './fase-experiencia.service';

describe('FaseExperienciaService', () => {
  let service: FaseExperienciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaseExperienciaService],
    }).compile();

    service = module.get<FaseExperienciaService>(FaseExperienciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
