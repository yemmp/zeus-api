import { Test, TestingModule } from '@nestjs/testing';
import { TipoMidiaService } from './tipo-midia.service';

describe('TipoMidiaService', () => {
  let service: TipoMidiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoMidiaService],
    }).compile();

    service = module.get<TipoMidiaService>(TipoMidiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
