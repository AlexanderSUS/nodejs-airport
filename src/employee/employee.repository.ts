import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeModel } from './employee.model';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class EmployeeRepository {
  constructor(
    private readonly databaseService: DatabaseService<EmployeeModel>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        INSERT INTO employee (
          first_name,
          last_name,
          email,
          password
        ) VALUES (
          $1,
          $2,
          $3,
          $4
        ) RETURNING * 
        `,
      [
        createEmployeeDto.firstName,
        createEmployeeDto.lastName,
        createEmployeeDto.email,
        createEmployeeDto.password,
      ],
    );

    return plainToInstance(EmployeeModel, databaseResponse.rows[0]);
  }

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(`
      SELECT * FROM employee 
    `);

    return plainToInstance(EmployeeModel, databaseResponse.rows);
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROMM employee WHERE id=$1
    `,
      [id],
    );
    const [entity] = databaseResponse.rows;

    return plainToInstance(EmployeeModel, entity);
  }

  async getByEmail(email: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT * FROM employee WHERE email=$1
    `,
      [email],
    );
    const [entity] = databaseResponse.rows;

    return plainToInstance(EmployeeModel, entity);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE employee
      SET first_name = $2, last_name = $3, email = $4
      WHERE id = $1
      RETURNING *
      `,
      [
        id,
        updateEmployeeDto.firstName,
        updateEmployeeDto.lastName,
        updateEmployeeDto.email,
      ],
    );
    const [entity] = databaseResponse.rows;

    return plainToInstance(EmployeeModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(`DELETE FROM employee WHERE id=$1`, [
      id,
    ]);
  }
}
