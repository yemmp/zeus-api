import { Test, TestingModule } from '@nestjs/testing';
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service';

describe('ExperienciaDispositivoService', () => {
  let service: ExperienciaDispositivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperienciaDispositivoService],
    }).compile();

    service = module.get<ExperienciaDispositivoService>(ExperienciaDispositivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
