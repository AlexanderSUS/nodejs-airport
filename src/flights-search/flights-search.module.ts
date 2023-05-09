import { Module } from '@nestjs/common';
import { FlightsSearchService } from './flights-search.service';
import { FlightsSearchController } from './flights-search.controller';
import { FlightsSearchRepository } from './flights-search.repository';

@Module({
  controllers: [FlightsSearchController],
  providers: [FlightsSearchService, FlightsSearchRepository],
})
export class FlightsSearchModule {}
