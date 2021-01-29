import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoDispositivoService } from './avaliacao-dispositivo.service';

describe('AvaliacaoDispositivoService', () => {
  let service: AvaliacaoDispositivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliacaoDispositivoService],
    }).compile();

    service = module.get<AvaliacaoDispositivoService>(AvaliacaoDispositivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
