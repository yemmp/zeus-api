import {Test,TestingModule} from '@nestjs/testing';
import {PontoRotaService} from './ponto-rota.service';

describe('PontoRotaService',()=> {
    let service: PontoRotaService;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers: [PontoRotaService],
        }).compile();
        service = module.get<PontoRotaService>(PontoRotaService);
    });
    it('should be defined',()=>{
        expect(service).toBeDefined();
    });
})