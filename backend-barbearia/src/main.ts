import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://127.0.0.1:3001'], // Permite requisições de qualquer origem
    methods: 'GET,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeçalhos permitidos
    credentials: false, // Se você precisa de cookies ou cabeçalhos de autenticação
  });
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Se o usuario enviar algum parametro inexistente
      transform: true, //Para validação ultilizando ParseIntPipe
    }),
  );
}
bootstrap();
