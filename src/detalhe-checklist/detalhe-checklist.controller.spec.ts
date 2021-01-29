import { Test, TestingModule } from '@nestjs/testing';
import { DetalheChecklistController } from './detalhe-checklist.controller';
import { DetalheChecklistService } from './detalhe-checklist.service';

describe('DetalheChecklistController', () => {
  let controller: DetalheChecklistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalheChecklistController],
      providers: [DetalheChecklistService],
    }).compile();

    controller = module.get<DetalheChecklistController>(DetalheChecklistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
