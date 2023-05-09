import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { FlightsSearchQueryParamsDto } from './dto/flights-search-query-params.dto';
import { FlightsSearchModel } from './flights-search.model';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class FlightsSearchRepository {
  constructor(
    private readonly databaseService: DatabaseService<FlightsSearchModel>,
  ) {}

  async find(queryParams: FlightsSearchQueryParamsDto) {
    let whereClause = '';
    const values: string[] = [];

    let i = 1;

    for (const key in queryParams) {
      const tableKey = key
        .replace('arrival_', 'aa.')
        .replace('departure_', 'da.');

      whereClause += `${i === 1 ? 'WHERE' : ' AND'} ${tableKey} = $${i}`;

      values.push(queryParams[key]);
      i++;
    }

    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT 
           f.id AS flight_id
          ,f."date" AS flight_date
          ,da.city AS departure_city
          ,da.country AS departure_country
          ,da.iata AS departure_airport_iata
          ,f.departure_time as departure_time
          ,f.arrival_time as arrival_time
          ,aa.city AS arrival_city
          ,aa.country AS arrival_country
          ,aa.iata AS arrival_airport_iata
        FROM flight f 
        JOIN airport da ON f.departure_airport_id = da.id
        JOIN airport aa on f.arrival_airport_id  = aa.id
        ${whereClause}
    `,
      values,
    );

    return plainToInstance(FlightsSearchModel, databaseResponse.rows);
  }
}
