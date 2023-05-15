import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employees.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepository.create(createEmployeeDto);
  }

  getAll() {
    return this.employeesRepository.getAll();
  }

  findOneById(id: string) {
    return this.employeesRepository.getById(id);
  }

  findOneByEmail(email: string) {
    return this.employeesRepository.getByEmail(email);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(updateEmployeeDto.password, salt);

    return this.employeesRepository.update(id, {
      ...updateEmployeeDto,
      password: hashedPassword,
    });
  }

  remove(id: string) {
    return this.employeesRepository.delete(id);
  }
}
