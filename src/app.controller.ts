import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private authService:AuthService) {}
/*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  */

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')

  async login(@Request() request){
    return this.authService.login(request.usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  getPerfil(@Request() request){
    return request.usuario;
  }
}
