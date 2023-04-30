import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RedisModule } from 'src/redis/redis.module';
import { TokenService } from './token.service';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [RedisModule, EmployeeModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
