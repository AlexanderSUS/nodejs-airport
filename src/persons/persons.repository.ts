import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { PersonsModel } from './persons.model';
import { CreatePersonDto } from './dto/create-person.dto';
import { plainToInstance } from 'class-transformer';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonsQueryParamsDto } from './dto/persons-query-params.dto';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from 'src/common/default-params.const';

@Injectable()
export class PersonRepository {
  constructor(
    private readonly databaseService: DatabaseService<PersonsModel>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        INSERT INTO person (
          first_name,
          last_name
        ) VALUES (
          $1,
          $2
        ) RETURNING *
      `,
      [createPersonDto.firstName, createPersonDto.lastName],
    );

    return plainToInstance(PersonsModel, databaseResponse.rows[0]);
  }

  async getAll({
    limit = DEFAULT_LIMIT,
    offset = DEFAULT_OFFSET,
  }: PersonsQueryParamsDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT *
          ,COUNT(*) OVER() AS total_count 
        FROM person
        OFFSET $1
        LIMIT $2
      `,
      [offset, limit],
    );

    return {
      total: databaseResponse.rows[0]?.total_count || 0,
      data: plainToInstance(PersonsModel, databaseResponse.rows),
    };
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM person where id = $1`,
      [id],
    );

    const [entity] = databaseResponse.rows;
    return plainToInstance(PersonsModel, entity);
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        UPDATE person
        SET first_name = $2, last_name = $3
        WHERE id = $1
        RETURNING *
      `,
      [id, updatePersonDto.firstName, updatePersonDto.lastName],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(PersonsModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(`DELETE FROM person WHERE id=$1`, [id]);
  }
}
