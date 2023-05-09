import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentRepository } from './document.repository';
import { PersonService } from 'src/persons/persons.service';

@Injectable()
export class DocumentService {
  constructor(
    private readonly documentRepository: DocumentRepository,
    private readonly personService: PersonService,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    const { personId } = createDocumentDto;

    const person = await this.personService.findOne(personId);

    if (!person) {
      throw new BadRequestException(
        `Person with id ${personId} does not exist`,
      );
    }

    return this.documentRepository.create(createDocumentDto);
  }

  findAll() {
    return this.documentRepository.getAll();
  }

  async findOne(id: string) {
    const document = await this.documentRepository.getById(id);

    if (!document) {
      throw new NotFoundException();
    }

    return document;
  }

  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    const document = await this.documentRepository.update(
      id,
      updateDocumentDto,
    );

    if (!document) {
      throw new NotFoundException();
    }

    return document;
  }

  remove(id: string) {
    return this.documentRepository.delete(id);
  }
}
