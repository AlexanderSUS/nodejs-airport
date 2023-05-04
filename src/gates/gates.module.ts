import { Module } from '@nestjs/common';
import { GatesService } from './gates.service';
import { GatesController } from './gates.controller';
import { AirportsModule } from 'src/airports/airports.module';
import { TerminalsModule } from 'src/terminals/terminals.module';
import { GatesRepository } from './gates.repository';

@Module({
  imports: [AirportsModule, TerminalsModule],
  controllers: [GatesController],
  providers: [GatesService, GatesRepository],
})
export class GatesModule {}
