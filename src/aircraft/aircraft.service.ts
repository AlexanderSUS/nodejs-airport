import { Injectable } from '@nestjs/common';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { AircraftRepository } from './aircraft.repository';

@Injectable()
export class AircraftService {
  constructor(private readonly aircraftRepository: AircraftRepository) {}

  create(createAircraftDto: CreateAircraftDto) {
    return this.aircraftRepository.create(createAircraftDto);
  }

  getAll() {
    return this.aircraftRepository.getAll();
  }

  getOne(id: string) {
    return this.aircraftRepository.getById(id);
  }

  update(id: string, updateAircraftDto: UpdateAircraftDto) {
    return this.aircraftRepository.update(id, updateAircraftDto);
  }

  remove(id: string) {
    return this.aircraftRepository.delete(id);
  }
}
