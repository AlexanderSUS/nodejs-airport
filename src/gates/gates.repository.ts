import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { GatesModel } from './gates.model';
import { CreateGateDto } from './dto/create-gate.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateGateDto } from './dto/update-gate.dto';
import { GatesQueryParamsDto } from './dto/gates-query-params.dto';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from 'src/common/default-params.const';

@Injectable()
export class GatesRepository {
  constructor(private readonly databaseService: DatabaseService<GatesModel>) {}

  async create(createGateDto: CreateGateDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      INSERT INTO gate (
        terminal_id,  
        number,
        airport_id
      ) VALUES (
        $1,
        $2,
        $3
      ) RETURNING *
    `,
      [createGateDto.terminalId, createGateDto.number, createGateDto.airportId],
    );

    return plainToInstance(GatesModel, databaseResponse.rows[0]);
  }

  async getAll({
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
  }: GatesQueryParamsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT *
        ,COUNT(*) OVER() AS total_count 
      FROM gate
      OFFSET $1
      LIMIT $2
    `,
      [offset, limit],
    );

    return {
      total: databaseResponse.rows[0]?.total_count || 0,
      data: plainToInstance(GatesModel, databaseResponse.rows),
    };
  }

  async findOneById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
    SELECT * FROM gate WHERE id = $1
   `,
      [id],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(GatesModel, entity);
  }

  async update(id: string, updateGateDto: UpdateGateDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        UPDATE gate
        SET terminal_id = $2, number = $3, airport_id = $4
        WHERE id = $1
        RETURNING *
      `,
      [
        id,
        updateGateDto.terminalId,
        updateGateDto.number,
        updateGateDto.airportId,
      ],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(GatesModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(
      `
      DELETE FROM gate WHERE id = $1`,
      [id],
    );
  }
}
