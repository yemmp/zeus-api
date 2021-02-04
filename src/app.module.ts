import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginModule } from './login/login.module';
import { SessaoModule } from './sessao/sessao.module';
import { ConcessionariaModule } from './concessionaria/concessionaria.module';
import { RotaModule } from './rota/rota.module';
import { TrajetoModule } from './trajeto/trajeto.module';
import { PontoTrajetoModule } from './ponto-trajeto/ponto-trajeto.module';
import { AtividadeModule } from './atividade/atividade.module';
import { MidiaModule } from './midia/midia.module';
import { FormularioModule } from './formulario/formulario.module';
import { DispositivoModule } from './dispositivo/dispositivo.module';
import { ExperienciaModule } from './experiencia/experiencia.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { TestDriveModule } from './test-drive/test-drive.module';
import { AvaliacaoDispositivoModule } from './avaliacao-dispositivo/avaliacao-dispositivo.module';
import { FaseExperienciaModule } from './fase-experiencia/fase-experiencia.module';
import { CheckListModule } from './check-list/check-list.module';
import { DetalheChecklistModule } from './detalhe-checklist/detalhe-checklist.module';
import { IconeModule } from './icone/icone.module';
import { InformacaoModule } from './informacao/informacao.module';
import { PontoRotaModule } from './ponto-rota/ponto-rota.module';
import { ExperienciaDispositivoModule } from './experiencia-dispositivo/experiencia-dispositivo.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [],
    }),
    UsuarioModule,
    LoginModule,
    SessaoModule,
    ConcessionariaModule,
    RotaModule,
    TrajetoModule,
    PontoTrajetoModule,
    AtividadeModule,
    MidiaModule,
    FormularioModule,
    DispositivoModule,
    ExperienciaModule,
    AvaliacaoModule,
    TestDriveModule,
    AvaliacaoDispositivoModule,
    FaseExperienciaModule,
    CheckListModule,
    DetalheChecklistModule,
    IconeModule,
    InformacaoModule,
    PontoRotaModule,
    ExperienciaDispositivoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
