import { Test, TestingModule } from '@nestjs/testing';
import { ConcessionariaService } from './concessionaria.service';

describe('ConcessionariaService', () => {
  let service: ConcessionariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcessionariaService],
    }).compile();

    service = module.get<ConcessionariaService>(ConcessionariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
