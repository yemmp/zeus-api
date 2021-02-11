import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Zeus REST API')
  .setDescription('The ZEUS Project REST Webservices')
  .setVersion('1.0')
  .addTag('zeus')
<<<<<<< HEAD
  .addServer("http://localhost:3000", "dev-local")
=======
  .addServer("http://127.0.0.1:3000/", "dev-local")
>>>>>>> aa11b49961d7cc6aa5f5dc53458c5f7f8a017599
  .addServer("http://100.26.1.157/zeus-api", "zeus-api")
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.SWAGGER_ENDPOINT, app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
