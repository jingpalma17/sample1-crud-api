import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const basePath = '/api'; // Use config setting ./config
  const explorerPath = 'explorer';

  app.enableCors({ origin: '*' });
  app.setGlobalPrefix(basePath);
  const options = new DocumentBuilder()
    .setBasePath(basePath)
    .setTitle('Sample1 CRUD')
    .setDescription('The Sample1 CRUD API documentation')
    .setVersion('1.0')
    // .addTag('tag')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(explorerPath, app, document);

  await app.listen(3000);
}
bootstrap();
