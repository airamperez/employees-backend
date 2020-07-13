import { Module } from '@nestjs/common';
import { DatabaseProviders } from '../database/database-providers';
@Module({
 providers: [...DatabaseProviders],
 exports: [...DatabaseProviders],
})
export class DatabaseModule {}