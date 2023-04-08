import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly redisService: RedisService,
  ) {}

  async getTokens(userId: string) {
    const accessToken = this.generateToken();
    const refreshToken = this.generateToken();

    try {
      await this.saveAccessToken(userId, accessToken);
      await this.saveRefreshToken(userId, refreshToken);
    } catch (error) {
      throw new InternalServerErrorException('Ups... Something went wrong...');
    }

    return { accessToken, refreshToken };
  }

  async renewTokens(userId: string, refreshToken: string) {
    try {
      await this.redisService.remove(refreshToken);
    } catch (error) {
      throw new InternalServerErrorException();
    }

    return this.getTokens(userId);
  }

  find(token: string) {
    return this.redisService.find(token);
  }

  remove(token: string) {
    return this.redisService.remove(token);
  }

  private saveAccessToken(userId: string, token: string) {
    const expirationTime = this.configService.get(
      'ACCESS_TOKEN_EXPIRATION_TIME',
    );

    return this.redisService.save(token, userId, expirationTime);
  }

  private saveRefreshToken(userId: string, token: string) {
    const expirationTime = this.configService.get(
      'REFRESH_TOKEN_EXPIRATION_TIME',
    );

    return this.redisService.save(token, userId, expirationTime);
  }

  private generateToken() {
    return Date.now().toString() + Math.round(Math.random() * 1e9).toString();
  }
}
