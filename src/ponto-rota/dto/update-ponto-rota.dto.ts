import {PartialType} from '@nestjs/mapped-types'
import {CreatePontoRotaDto} from './create-ponto-rota.dto'

export class UpdatePontoRotaDto extends PartialType(CreatePontoRotaDto){}