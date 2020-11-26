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
    // whitelist : 유효하지 않은 값은 넣지 않는다.
    // forbidNonWhitelisted를 통해 유효하지 않은 값 들어올 시 request 막을 수 있다.
    // transform 설정을 통해 해당 타입설정에 대한 instanceof를 설정할 수 있다. 
    // ex) coffees.controller의 Post를 보세요! 또한 타입에 대한 설정을 다르게 해놓으면 자동으로 변경시켜준다!
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
