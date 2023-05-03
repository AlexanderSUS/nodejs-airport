import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeesRepository.create(createEmployeeDto);
  }

  findAll() {
    return this.employeesRepository.getAll();
  }

  async findOneById(id: string) {
    const employee = await this.employeesRepository.getById(id);

    if (!employee) {
      throw new NotFoundException();
    }

    return employee;
  }

  findOneByEmail(email: string) {
    return this.employeesRepository.getByEmail(email);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeesRepository.update(
      id,
      updateEmployeeDto,
    );

    if (!employee) {
      throw new NotFoundException();
    }

    return employee;
  }

  async remove(id: string) {
    await this.employeesRepository.delete(id);
  }
}
