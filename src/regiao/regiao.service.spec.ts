import { Test, TestingModule } from '@nestjs/testing';
import { RegiaoService } from './regiao.service';

describe('RegiaoService', () => {
  let service: RegiaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegiaoService],
    }).compile();

    service = module.get<RegiaoService>(RegiaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
