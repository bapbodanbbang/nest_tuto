import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
    intsall two packages

    npm i class-validator class-transformer
  */

  app.useGlobalPipes(
    //whitelist : 유효하지 않은 값은 넣지 않는다.
    //forbidNonWhitelisted를 통해 유효하지 않은 값 들어올 시 request 막을 수 있다.
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  await app.listen(3000);
}
bootstrap();
