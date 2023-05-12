import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentRepository } from './document.repository';
import { PersonService } from 'src/persons/persons.service';
import { DocumentsQueryParams } from './dto/documents-query-params.dto';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly personService: PersonService,
  ) {}

  create(createDocumentDto: CreateDocumentDto) {
    return this.documentRepository.create(createDocumentDto);
  }

  getAll(documentsQueryParams: DocumentsQueryParams) {
    return this.documentRepository.getAll(documentsQueryParams);
  }

  getOne(id: string) {
    return this.documentRepository.getById(id);
  }

  update(id: string, updateDocumentDto: UpdateDocumentDto) {
    return this.documentRepository.update(id, updateDocumentDto);
  }

  remove(id: string) {
    return this.documentRepository.delete(id);
  }
}
