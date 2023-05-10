import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { AirportModel } from './airport.model';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';
import { AirportsQueryParamsDto } from './dto/airports-query-params.dto';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from 'src/common/default-params.const';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AirportsRepository {
  constructor(
    private readonly databaseService: DatabaseService<AirportModel>,
  ) {}

  async create(createAirportDto: CreateAirportDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        INSERT INTO airport (
          iata,
          name,
          city,
          country
        ) VALUES (
          $1,
          $2,
          $3,
          $4
        ) RETURNING *
      `,
      [
        createAirportDto.iata,
        createAirportDto.name,
        createAirportDto.city,
        createAirportDto.country,
      ],
    );

    return databaseResponse.rows[0];
  }

  async getAll({
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
  }: AirportsQueryParamsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `SELECT * 
        ,COUNT(*) OVER() AS total_count 
      FROM airport
      OFFSET $1
      LIMIT $2
      `,
      [offset, limit],
    );

    return {
      total: databaseResponse.rows[0]?.total_count || 0,
      data: plainToInstance(AirportModel, databaseResponse.rows),
    };
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM airport WHERE id=$1
    `,
      [id],
    );

    return databaseResponse.rows[0];
  }

  async update(id: string, updateAirportDto: UpdateAirportDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        UPDATE airport
        SET 
          iata = $2, 
          name = $3,
          city = $4,
          country = $5
        WHERE id = $1
        RETURNING *
      `,
      [
        id,
        updateAirportDto.iata,
        updateAirportDto.name,
        updateAirportDto.city,
        updateAirportDto.country,
      ],
    );

    return databaseResponse.rows[0];
  }

  async delete(id: string) {
    await this.databaseService.runQuery(
      `
      DELETE FROM airport WHERE id=$1
    `,
      [id],
    );
  }
}
