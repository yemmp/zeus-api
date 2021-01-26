import { Test, TestingModule } from '@nestjs/testing';
import { TrajetoService } from './trajeto.service';

describe('TrajetoService', () => {
  let service: TrajetoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrajetoService],
    }).compile();

    service = module.get<TrajetoService>(TrajetoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
