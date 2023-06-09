import { Injectable, NotFoundException } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { AircraftModel } from './aircraft.model';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { AircraftQueryParamsDto } from './dto/aircraft-query-params.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AircraftRepository {
  constructor(
    private readonly databaseService: DatabaseService<AircraftModel>,
  ) {}

  async create(createAircraftDto: CreateAircraftDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      INSERT INTO aircraft (
        make,
        model,
        seats
      ) VALUES (
        $1,
        $2,
        $3
      ) RETURNING *
      `,
      [
        createAircraftDto.make,
        createAircraftDto.model,
        createAircraftDto.seats,
      ],
    );

    return databaseResponse.rows[0];
  }

  async getAll(aircraftQueryParams: AircraftQueryParamsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT *
        ,COUNT(*) OVER() AS total_count 
      FROM aircraft 
      OFFSET $1
      LIMIT $2
    `,
      [aircraftQueryParams.offset, aircraftQueryParams.limit],
    );

    return {
      total: databaseResponse.rows[0]?.total_count || '0',
      data: plainToInstance(AircraftModel, databaseResponse.rows),
    };
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM aircraft WHERE id=$1
    `,
      [id],
    );

    const [entity] = databaseResponse.rows;

    if (!entity) {
      throw new NotFoundException();
    }

    return entity;
  }

  async update(id: string, updateAircraftDto: UpdateAircraftDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE aircraft
      SET make = $2, model = $3, seats = $4
      WHERE id = $1
      RETURNING *
      `,
      [
        id,
        updateAircraftDto.make,
        updateAircraftDto.model,
        updateAircraftDto.seats,
      ],
    );

    const [entity] = databaseResponse.rows;

    if (!entity) {
      throw new NotFoundException();
    }

    return entity;
  }

  async delete(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        DELETE FROM aircraft 
        WHERE id=$1
        RETURNING *
      `,
      [id],
    );

    const [entity] = databaseResponse.rows;

    if (!entity) {
      throw new NotFoundException();
    }
  }
}
