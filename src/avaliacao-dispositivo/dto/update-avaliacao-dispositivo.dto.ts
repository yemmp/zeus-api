import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoDispositivoDto } from './create-avaliacao-dispositivo.dto';

export class UpdateAvaliacaoDispositivoDto extends PartialType(CreateAvaliacaoDispositivoDto) {}
