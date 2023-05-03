import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeController } from './employees.controller';
import { EmployeeRepository } from './employees.repository';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeesService, EmployeeRepository],
  exports: [EmployeesService],
})
export class EmployeesModule {}
