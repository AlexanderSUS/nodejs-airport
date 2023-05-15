import { Module } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import { AircraftController } from './aircraft.controller';
import { AircraftRepository } from './aircraft.repository';

@Module({
  controllers: [AircraftController],
  providers: [AircraftService, AircraftRepository],
})
export class AircraftModule {}
