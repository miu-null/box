import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // filtering except property that defined in dto file
      forbidNonWhitelisted: true, // send error message if the input value is not defined in dto
      transform: true, // cast the data type
    }),
  );

  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
