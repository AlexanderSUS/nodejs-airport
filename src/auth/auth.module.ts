import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RedisModule } from 'src/redis/redis.module';
import { TokenService } from './token.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [RedisModule, DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
