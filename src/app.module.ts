import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModule } from './usuario/usuario.module';
import { TipoPerfilModule } from './tipo-perfil/tipo-perfil.module';
import { LoginModule } from './login/login.module';
import { SessaoModule } from './sessao/sessao.module';
import { ConcessionariaModule } from './concessionaria/concessionaria.module';
import { RotaModule } from './rota/rota.module';
import { TrajetoModule } from './trajeto/trajeto.module';
import { TipoFaseModule } from './tipo-fase/tipo-fase.module';
import { PontoTrajetoModule } from './ponto-trajeto/ponto-trajeto.module';
import { AtividadeModule } from './atividade/atividade.module';
import { MidiaModule } from './midia/midia.module';
import { TipoMidiaModule } from './tipo-midia/tipo-midia.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'a1b2c3d4e5',
      database: 'zeus',
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
    UsuarioModule,
    TipoPerfilModule,
    LoginModule,
    SessaoModule,
    ConcessionariaModule,
    RotaModule,
    TrajetoModule,
    TipoFaseModule,
    PontoTrajetoModule,
    AtividadeModule,
    MidiaModule,
    TipoMidiaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
