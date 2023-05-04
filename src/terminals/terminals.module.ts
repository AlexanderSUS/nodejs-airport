import { Module } from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { TerminalsController } from './terminals.controller';
import { TerminalsRepository } from './terminals.repository';
import { AirportsModule } from 'src/airports/airports.module';

@Module({
  imports: [AirportsModule],
  controllers: [TerminalsController],
  providers: [TerminalsService, TerminalsRepository],
  exports: [TerminalsService],
})
export class TerminalsModule {}
