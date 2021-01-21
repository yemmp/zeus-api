import { Test, TestingModule } from '@nestjs/testing';
import { ConcessionariaController } from './concessionaria.controller';
import { ConcessionariaService } from './concessionaria.service';

describe('ConcessionariaController', () => {
  let controller: ConcessionariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcessionariaController],
      providers: [ConcessionariaService],
    }).compile();

    controller = module.get<ConcessionariaController>(ConcessionariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
