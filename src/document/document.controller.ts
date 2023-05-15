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
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentsQueryParams } from './dto/documents-query-params.dto';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import {
  AppApiCreatedResponse,
  AppApiNoContentResponse,
  AppApiOkResponse,
  AppApiPaginatedResponse,
} from 'src/decorators/app-api.decorator';
import { DocumentsResponseDto } from './dto/documetns-response.dto';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';

@ApiExtraModels(PaginatedResponseDto)
@ApiTags('Documents')
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @AppApiCreatedResponse({ type: DocumentsResponseDto })
  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @AppApiPaginatedResponse(DocumentsResponseDto)
  @Get()
  getAll(
    @Query(new ValidationPipe({ transform: true }))
    documentsQueryParams: DocumentsQueryParams,
  ) {
    return this.documentService.getAll(documentsQueryParams);
  }

  @AppApiOkResponse({ type: DocumentsResponseDto })
  @Get(':id')
  getOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.documentService.getOne(id);
  }

  @AppApiOkResponse({ type: DocumentsResponseDto })
  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentService.update(id, updateDocumentDto);
  }

  @AppApiNoContentResponse()
  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.documentService.remove(id);
  }
}
