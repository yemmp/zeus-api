import {Module} from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize';
import { Icone } from 'src/icone/entities/icone.entity';
import { Rota } from 'src/rota/entities/rota.entity';
import { PontoRota } from './entities/ponto-rota.entity';
import { PontoRotaController } from './ponto-rota.controller';
import { PontoRotaService } from './ponto-rota.service';

@Module({
    controllers: [PontoRotaController],
    providers: [PontoRotaService],
    imports: [SequelizeModule.forFeature([PontoRota]),Rota,Icone]
})

export class PontoRotaModule{}