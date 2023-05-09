import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './document.repository';
import { PersonsModule } from 'src/persons/persons.module';

@Module({
  imports: [PersonsModule],
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
})
export class DocumentModule {}
