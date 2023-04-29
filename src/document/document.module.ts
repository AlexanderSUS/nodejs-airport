import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentRepository } from './document.repository';
import { PersonModule } from 'src/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
})
export class DocumentModule {}
