import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
  new ValidationPipe({ whitelist: true }),
  
);

  app.enableCors({
    origin: 'https://hebatech.cloud', // Vite
    methods: ['GET', 'POST'],
    credentials: true,
  });

  app.useGlobalPipes(
  new ValidationPipe({
    transform: true,
  }),
);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
