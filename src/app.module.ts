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
import { RotaFaseModule } from './rota-fase/rota-fase.module';
import { TrajetoModule } from './trajeto/trajeto.module';
import { FaseModule } from './fase/fase.module';
import { TipoFaseModule } from './tipo-fase/tipo-fase.module';
import { PontoTrajetoModule } from './ponto-trajeto/ponto-trajeto.module';
import { AtividadeModule } from './atividade/atividade.module';
import { MidiaModule } from './midia/midia.module';
import { TipoMidiaModule } from './tipo-midia/tipo-midia.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '132702',
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
    RotaFaseModule,
    TrajetoModule,
    FaseModule,
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
