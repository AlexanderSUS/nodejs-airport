import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Pool } from 'pg';
import { CONNECTION_POOL } from './database.module-definition';
import { isPgDefinedError } from './util/is-pg-defied-error';

@Injectable()
class DatabaseService<T> {
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {}

  async runQuery(query: string, params?: unknown[]) {
    try {
      return await this.pool.query<T>(query, params);
    } catch (error) {
      if (isPgDefinedError(error)) {
        throw new BadRequestException(error.detail);
      }

      throw new InternalServerErrorException();
    }
  }
}

export default DatabaseService;
