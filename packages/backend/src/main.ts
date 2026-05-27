import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';

@Controller('status')
export class AppController {
  @Get()
  getStatus() {
    return {
      status: 'healthy',
      app: 'dailytech-api',
      message: 'NestJS backend is stubbed and ready for future integrations (auth, db, etc.).'
    };
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Dailytech NestJS Backend running on http://localhost:${port}`);
}
bootstrap();
