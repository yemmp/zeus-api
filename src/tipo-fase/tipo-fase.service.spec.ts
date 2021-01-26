import { Test, TestingModule } from '@nestjs/testing';
import { TipoFaseService } from './tipo-fase.service';

describe('TipoFaseService', () => {
  let service: TipoFaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoFaseService],
    }).compile();

    service = module.get<TipoFaseService>(TipoFaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
