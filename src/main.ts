import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { router } from './router';

async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      router(app);
      await app.listen(3000);
}
bootstrap();
