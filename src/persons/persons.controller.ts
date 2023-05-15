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
  ValidationPipe,
} from '@nestjs/common';
import { PersonService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonsQueryParamsDto } from './dto/persons-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { PersonsResponseDto } from './dto/persons-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @AppApiCreatedResponse({ type: PersonsResponseDto })
  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @AppApiPaginatedResponse(PersonsResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    personsQueryParams: PersonsQueryParamsDto,
  ) {
    return this.personService.getAll(personsQueryParams);
  }

  @AppApiOkResponse({ type: PersonsResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.personService.getOne(id);
  }

  @AppApiOkResponse({ type: PersonsResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.update(id, updatePersonDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.personService.remove(id);
  }
}
