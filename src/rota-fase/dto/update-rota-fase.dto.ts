import { PartialType } from '@nestjs/mapped-types';
import { CreateRotaFaseDto } from './create-rota-fase.dto';

export class UpdateRotaFaseDto extends PartialType(CreateRotaFaseDto) {}
