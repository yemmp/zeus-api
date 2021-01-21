import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    autoLoadModels: true,
    synchronize: true,
    models: [],

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
