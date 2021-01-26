import { PartialType } from '@nestjs/mapped-types';
import { CreatePontoTrajetoDto } from './create-ponto-trajeto.dto';

export class UpdatePontoTrajetoDto extends PartialType(CreatePontoTrajetoDto) {}
