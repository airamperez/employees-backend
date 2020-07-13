import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EmployedsModule } from './employeds/employeds.module';

@Module({
  imports: [DatabaseModule, EmployedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
