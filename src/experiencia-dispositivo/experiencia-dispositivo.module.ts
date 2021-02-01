import {Module} from '@nestjs/common'
import {SequelizeModule} from '@nestjs/sequelize'
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity'
import { Experiencia } from 'src/experiencia/entities/experiencia.entity'
import { ExperienciaController } from 'src/experiencia/experiencia.controller'
import { ExperienciaDispositivo } from './entities/experiencia-dispositivo.entity'
import { ExperienciaDispositivoController } from './experiencia-dispositivo.controller'
import { ExperienciaDispositivoService } from './experiencia-dispositivo.service'

@Module({
    controllers: [ExperienciaDispositivoController],
    providers: [ExperienciaDispositivoService],
    imports: [SequelizeModule.forFeature([ExperienciaDispositivo]),Dispositivo,Experiencia]
})
export class ExperienciaDispositivoModule{}