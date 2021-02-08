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
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup(process.env.SWAGGER_ENDPOINT, app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
