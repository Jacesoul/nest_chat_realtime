import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RedisIoAdapter } from './adapters/redis.adapter';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useWebSocketAdapter(new RedisIoAdapter(app));
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'resource'));
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
