import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  create(createPersonDto: CreatePersonDto) {
    return this.personRepository.create(createPersonDto);
  }

  findAll() {
    return this.personRepository.getAll();
  }

  findOne(id: string) {
    return this.personRepository.getById(id);
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.personRepository.update(id, updatePersonDto);
  }

  remove(id: string) {
    return this.personRepository.delete(id);
  }
}
