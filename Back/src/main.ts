import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  app.setGlobalPrefix("v1/api") //se ingresa mediante esta ruta agregada, ejem: localhost:3000/v1/api
  await app.listen(3000);
}
bootstrap();
