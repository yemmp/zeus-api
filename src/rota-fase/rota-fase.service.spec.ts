import { Test, TestingModule } from '@nestjs/testing';
import { RotaFaseService } from './rota-fase.service';

describe('RotaFaseService', () => {
  let service: RotaFaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RotaFaseService],
    }).compile();

    service = module.get<RotaFaseService>(RotaFaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
