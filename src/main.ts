import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My api Documentation')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('role')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();

/*
  SwaggerModule.setup('documentation', app, document); 
  esto hace referencia a la ruta de llamada en la web: http://.....
*/