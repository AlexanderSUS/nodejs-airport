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

  async find({ available_seats, ...restParams }: FlightsSearchQueryParamsDto) {
    let whereClause = '';
    const values: string[] = [];

    let i = 1;

    for (const key in restParams) {
      const tableKey = key
        .replace('arrival_', 'aa.')
        .replace('departure_', 'da.');

      whereClause += `${i === 1 ? 'WHERE' : ' AND'} ${tableKey} = $${i}`;

      values.push(restParams[key]);
      i++;
    }

    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT * 
        FROM (
          SELECT 
            f.id AS flight_id
            ,f."date" AS flight_date
            ,f.cost AS cost
            ,da.city AS departure_city
            ,da.country AS departure_country
            ,da.iata AS departure_airport_iata
            ,f.departure_time AS departure_time
            ,f.arrival_time AS arrival_time
            ,aa.city AS arrival_city
            ,aa.country AS arrival_country
            ,aa.iata AS arrival_airport_iata
            ,ac.model AS aircraft_model
            ,(ac.seats - COUNT(fd.document_id)) AS available_seats
          FROM flight f 
          JOIN airport da ON f.departure_airport_id = da.id
          JOIN airport aa ON f.arrival_airport_id  = aa.id
          JOIN aircraft ac ON f.aircraft_id = ac.id
          LEFT JOIN flight_document fd ON f.id = fd.flight_id
          ${whereClause}
          group by f.id, da.city, da.country, da.iata, aa.city, aa.country, aa.iata, ac.model, ac.seats, fd.document_id
        ) AS res
        WHERE res.available_seats > ${available_seats} 
      `,
      values,
    );

    return plainToInstance(FlightsSearchModel, databaseResponse.rows);
  }
}
