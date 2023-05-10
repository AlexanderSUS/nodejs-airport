import { Injectable } from '@nestjs/common';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { AircraftRepository } from './aircraft.repository';
import { AircraftQueryParamsDto } from './dto/aircraft-query-params.dto';

@Injectable()
export class AircraftService {
  constructor(private readonly aircraftRepository: AircraftRepository) {}

  create(createAircraftDto: CreateAircraftDto) {
    return this.aircraftRepository.create(createAircraftDto);
  }

  findAll(aircraftQueryParams: AircraftQueryParamsDto) {
    return this.aircraftRepository.getAll(aircraftQueryParams);
  }

  findOne(id: string) {
    return this.aircraftRepository.getById(id);
  }

  update(id: string, updateAircraftDto: UpdateAircraftDto) {
    return this.aircraftRepository.update(id, updateAircraftDto);
  }

  async remove(id: string) {
    await this.aircraftRepository.delete(id);
  }
}
