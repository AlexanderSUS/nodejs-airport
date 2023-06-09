import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { SECONDS_PER_MINUTE } from './const';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly redisService: Cache) {}

  save(key: string, value: string, expirationTime: number) {
    return this.redisService.set(key, value, {
      ttl: expirationTime * SECONDS_PER_MINUTE,
    });
  }

  find(key: string) {
    return this.redisService.get<string>(key);
  }

  remove(key: string) {
    return this.redisService.del(key);
  }
}
