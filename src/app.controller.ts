import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { AuthDto } from './auth/dto/auth.dto';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
@ApiTags('Auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Listar usuários' })
  @ApiResponse({ status: 200, description: 'Ok', type: [String] })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
