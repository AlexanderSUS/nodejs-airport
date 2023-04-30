import { ConfigurableModuleAsyncOptions } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseOptions from 'src/database/interface/database-options.interface';

export const databaseModuleOptions: ConfigurableModuleAsyncOptions<DatabaseOptions> =
  {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      host: configService.get<string>('DB_HOST'),
      port: configService.get<number>('DB_PROT'),
      user: configService.get<string>('POSTGRES_USER'),
      password: configService.get<string>('POSTGRES_PASSWORD'),
      database: configService.get<string>('POSTGRES_DB'),
    }),
  };
