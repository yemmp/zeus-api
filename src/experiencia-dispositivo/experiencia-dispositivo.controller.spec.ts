import {Test, TestingModule} from '@nestjs/testing';
import {ExperienciaDispositivoService} from './experiencia-dispositivo.service';
import {ExperienciaDispositivoController} from './experiencia-dispositivo.controller';

describe('ExperienciaDispositivoController',()=>{

    let controller: ExperienciaDispositivoController;

    beforeEach(async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ExperienciaDispositivoController],
            providers: [ExperienciaDispositivoService],
        }).compile();

        controller= module.get<ExperienciaDispositivoController>(ExperienciaDispositivoController);
    });

    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    })
})