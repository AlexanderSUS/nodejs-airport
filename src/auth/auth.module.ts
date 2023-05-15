import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RedisModule } from 'src/redis/redis.module';
import { TokenService } from './token.service';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  imports: [RedisModule, EmployeesModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
