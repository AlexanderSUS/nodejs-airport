import { Injectable } from '@nestjs/common';
import { Employee } from './interface/employee.interface';

type EmployeeKey = keyof Omit<Employee, 'password'>;

@Injectable()
export class DatabaseService {
  private readonly store: Array<Employee> = [
    {
      id: '1',
      email: 'test@test.test',
      password: 'test1234',
    },
  ];

  findAll() {
    return [...this.store];
  }

  findOne({ key, value }: { key: EmployeeKey; value: string }) {
    return this.store.find((employee) => employee[key] === value);
  }
}
