import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), TaskModule, TypeOrmModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
