import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { AirportsRepository } from './airports.repository';

@Module({
  controllers: [AirportsController],
  providers: [AirportsService, AirportsRepository],
})
export class AirportsModule {}
