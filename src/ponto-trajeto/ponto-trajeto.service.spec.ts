import { Test, TestingModule } from '@nestjs/testing';
import { PontoTrajetoService } from './ponto-trajeto.service';

describe('PontoTrajetoService', () => {
  let service: PontoTrajetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PontoTrajetoService],
    }).compile();

    service = module.get<PontoTrajetoService>(PontoTrajetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
