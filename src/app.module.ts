import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModuleOptions } from './config/config-module-options.config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
