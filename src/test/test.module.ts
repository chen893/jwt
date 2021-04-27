import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { LoggerMiddleware, logger } from './logger.middleware';
@Module({
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, logger).forRoutes('test');
  }
}
