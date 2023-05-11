import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Put,
  Query,
} from '@nestjs/common';
import { PersonService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonsQueryParamsDto } from './dto/persons-query-params.dto';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  getAll(
    @Query()
    personsQueryParams: PersonsQueryParamsDto,
  ) {
    return this.personService.getAll(personsQueryParams);
  }

  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.personService.getOne(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.personService.remove(id);
  }
}
