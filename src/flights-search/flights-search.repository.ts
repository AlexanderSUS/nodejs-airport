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
      whereClause += `${i === 1 ? 'WHERE' : ' AND'} ${key} = $${i}`;

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
            ,departure_airport.city AS departure_city
            ,departure_airport.country AS departure_country
            ,departure_airport.iata AS departure_airport_iata
            ,f.departure_time AS departure_time
            ,f.arrival_time AS arrival_time
            ,arrival_airport.city AS arrival_city
            ,arrival_airport.country AS arrival_country
            ,arrival_airport.iata AS arrival_airport_iata
            ,ac.model AS aircraft_model
            ,(ac.seats - COUNT(fd.document_id)) AS available_seats
          FROM flight f 
          JOIN airport departure_airport ON f.departure_airport_id = departure_airport.id
          JOIN airport arrival_airport ON f.arrival_airport_id  = arrival_airport.id
          JOIN aircraft ac ON f.aircraft_id = ac.id
          LEFT JOIN flight_document fd ON f.id = fd.flight_id
          ${whereClause}
          GROUP BY f.id, departure_airport.city, departure_airport.country, departure_airport.iata, arrival_airport.city, arrival_airport.country, arrival_airport.iata, ac.model, ac.seats, fd.document_id
        ) AS res
        WHERE res.available_seats > ${available_seats} 
      `,
      values,
    );

    return plainToInstance(FlightsSearchModel, databaseResponse.rows);
  }
}
