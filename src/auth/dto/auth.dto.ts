import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty()
  dscLogin: string;
  @ApiProperty()
  dscSenha: string;
}
