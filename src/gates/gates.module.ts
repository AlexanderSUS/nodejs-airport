import { Module } from '@nestjs/common';
import { GatesService } from './gates.service';
import { GatesController } from './gates.controller';
import { GatesRepository } from './gates.repository';

@Module({
  controllers: [GatesController],
  providers: [GatesService, GatesRepository],
})
export class GatesModule {}
