import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { TerminalModel } from './terminal.model';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateTerminalDto } from './dto/update-terminal.dto';

@Injectable()
export class TerminalsRepository {
  constructor(
    private readonly databaseService: DatabaseService<TerminalModel>,
  ) {}

  async create(createTerminalDto: CreateTerminalDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        INSERT INTO terminal (
          name,
          airport_id
        ) VALUES (
          $1,
          $2
        ) RETURNING *
      `,
      [createTerminalDto.name, createTerminalDto.airportId],
    );

    return plainToInstance(TerminalModel, databaseResponse.rows[0]);
  }

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(
      `SELECT * FROM terminal`,
    );

    return plainToInstance(TerminalModel, databaseResponse.rows);
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `SELECT * FROM terminal WHERE id=$1`,
      [id],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(TerminalModel, entity);
  }

  async update(id: string, updateTerminalDto: UpdateTerminalDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE terminal
      SET name = $2, airport_id = $3
      WHERE id = $1
      RETURNING *
    `,
      [id, updateTerminalDto.name, updateTerminalDto.airportId],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(TerminalModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(
      `
      DELETE FROM terminal WHERE id = $1`,
      [id],
    );
  }
}
