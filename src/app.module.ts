import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoPerfilModule } from './tipo-perfil/tipo-perfil.module';
import { LoginModule } from './login/login.module';
import { SessaoModule } from './sessao/sessao.module';
import { ConcessionariaModule } from './concessionaria/concessionaria.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '132702',
    database: 'zeus',
    autoLoadModels: true,
    synchronize: true,
    models: [],

  }), UsuarioModule, TipoPerfilModule, LoginModule, SessaoModule, ConcessionariaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
