import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { defaultCreateRoles } from './role/role.default.create';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  const config = new DocumentBuilder()
    .setTitle('My api Documentation')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('role')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  // await defaultCreateRoles();
}
bootstrap();

/*
  SwaggerModule.setup('documentation', app, document); 
  esto hace referencia a la ruta de llamada en la web: http://.....


  new ValidationPipe({ whitelist: true })
  pasamos el objeto de configuracion para q anule todo tipo de parametro
  q no exista en nuestros decoradores de validacion
*/