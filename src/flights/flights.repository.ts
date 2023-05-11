import { Injectable, NotFoundException } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { FlightsModel } from './flights.model';
import { CreateFlightDto } from './dto/create-flight.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightsQueryParamsDto } from './dto/flights-query-params.dto';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from 'src/common/default-params.const';

@Injectable()
export class FlightsRepository {
  constructor(
    private readonly databaseService: DatabaseService<FlightsModel>,
  ) {}

  async create(createFlightDto: CreateFlightDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      INSERT INTO flight (
        date,
        aircraft_id,
        departure_time,
        arrival_time,
        departure_airport_id,
        departure_terminal_id,
        departure_gate_id,
        arrival_airport_id,
        arrival_terminal_id,
        arrival_gate_id,
        cost
      ) VALUES (
        $1,
        $2, 
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11
      ) RETURNING *
    `,
      [
        createFlightDto.date,
        createFlightDto.aircraftId,
        createFlightDto.departureTime,
        createFlightDto.arrivalTime,
        createFlightDto.departureAirportId,
        createFlightDto.departureTerminalId,
        createFlightDto.departureGateId,
        createFlightDto.arrivalAirportId,
        createFlightDto.arrivalTerminalId,
        createFlightDto.arrivalGateId,
        createFlightDto.cost,
      ],
    );

    return plainToInstance(FlightsModel, databaseResponse.rows[0]);
  }

  async getAll({
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
  }: FlightsQueryParamsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT * 
        ,COUNT(*) OVER() AS total_count 
        FROM flight
        OFFSET $1
        LIMIT $2
    `,
      [offset, limit],
    );

    return {
      total: databaseResponse.rows[0]?.total_count || 0,
      data: plainToInstance(FlightsModel, databaseResponse.rows),
    };
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT * FROM flight WHERE id = $1
      `,
      [id],
    );

    const [entity] = databaseResponse.rows;

    if (!entity) {
      throw new NotFoundException();
    }

    return plainToInstance(FlightsModel, entity);
  }

  async update(id: string, updateFlightDto: UpdateFlightDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE flight
      SET  
        date = $2,
        aircraft_id = $3,
        departure_time = $4,
        arrival_time = $5,
        departure_airport_id = $6,
        departure_terminal_id = $7,
        departure_gate_id = $8,
        arrival_airport_id = $9,
        arrival_terminal_id = $10,
        arrival_gate_id = $11
      WHERE id = $1
      RETURNING *
    `,
      [
        id,
        updateFlightDto.date,
        updateFlightDto.aircraftId,
        updateFlightDto.departureTime,
        updateFlightDto.arrivalTime,
        updateFlightDto.departureAirportId,
        updateFlightDto.departureTerminalId,
        updateFlightDto.departureGateId,
        updateFlightDto.arrivalAirportId,
        updateFlightDto.arrivalTerminalId,
        updateFlightDto.arrivalGateId,
      ],
    );

    const [entity] = databaseResponse.rows;

    if (!entity) {
      throw new NotFoundException();
    }

    return plainToInstance(FlightsModel, entity);
  }

  async delete(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        DELETE FROM flight
        WHERE id = $1
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
