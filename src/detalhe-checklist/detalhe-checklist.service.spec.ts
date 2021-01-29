import { Test, TestingModule } from '@nestjs/testing';
import { DetalheChecklistService } from './detalhe-checklist.service';

describe('DetalheChecklistService', () => {
  let service: DetalheChecklistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalheChecklistService],
    }).compile();

    service = module.get<DetalheChecklistService>(DetalheChecklistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
