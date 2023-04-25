import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepository.create(createEmployeeDto);
  }

  findAll() {
    return this.employeeRepository.getAll();
  }

  async findOneById(id: string) {
    const employee = await this.employeeRepository.getById(id);

    if (!employee) {
      throw new NotFoundException();
    }

    return employee;
  }

  findOneByEmail(email: string) {
    return this.employeeRepository.getByEmail(email);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.update(
      id,
      updateEmployeeDto,
    );

    if (!employee) {
      throw new NotFoundException();
    }

    return employee;
  }

  async remove(id: string) {
    await this.employeeRepository.delete(id);
  }
}
