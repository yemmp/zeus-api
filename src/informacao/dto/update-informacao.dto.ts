import { PartialType } from '@nestjs/mapped-types';
import { CreateInformacaoDto } from './create-informacao.dto';

export class UpdateInformacaoDto extends PartialType(CreateInformacaoDto) {}
