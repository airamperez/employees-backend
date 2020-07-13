import { Module } from '@nestjs/common';
import { EmployedsController } from '../employeds/api/employeds/employeds.controller';
import { EmployedsService } from '../employeds/services/employeds/employeds.service';
import { DatabaseModule } from 'src/database/database.module';
import { employedsProviders } from '../employeds/employeds.providers';
@Module({
 imports: [DatabaseModule],
 controllers: [EmployedsController],
 providers: [
  EmployedsService,
 ...employedsProviders
 ]
})
export class EmployedsModule {}