import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { AuthDto } from './auth/dto/auth.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
@ApiTags('Auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Listar usuários' })
  @ApiResponse({ status: 200, description: 'Ok', type: [String] })
  @ApiBody({ type: AuthDto})
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(req.user)
    return this.authService.login(req.user);
  }
}
