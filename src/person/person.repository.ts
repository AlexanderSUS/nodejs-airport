import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { PersonModel } from './person.model';
import { CreatePersonDto } from './dto/create-person.dto';
import { plainToInstance } from 'class-transformer';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonRepository {
  constructor(private readonly databaseService: DatabaseService<PersonModel>) {}

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

    return plainToInstance(PersonModel, databaseResponse.rows[0]);
  }

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(`
      SELECT * FROM person
    `);

    return plainToInstance(PersonModel, databaseResponse.rows);
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM person where id = $1`,
      [id],
    );

    const [entity] = databaseResponse.rows;
    return plainToInstance(PersonModel, entity);
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

    return plainToInstance(PersonModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(`DELETE FROM person WHERE id=$1`, [id]);
  }
}
