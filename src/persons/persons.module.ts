import { Module } from '@nestjs/common';
import { PersonService } from './persons.service';
import { PersonController } from './persons.controller';
import { PersonRepository } from './persons.repository';

@Module({
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
  exports: [PersonService],
})
export class PersonsModule {}
