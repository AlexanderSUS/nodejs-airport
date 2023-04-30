import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModuleOptions } from './config/config-module-options.config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { databaseModuleOptions } from './config/database-module-options';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    AuthModule,
    DatabaseModule.forRootAsync(databaseModuleOptions),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
