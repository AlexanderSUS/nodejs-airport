import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { DocumentModel } from './document.model';
import { CreateDocumentDto } from './dto/create-document.dto';
import { plainToInstance } from 'class-transformer';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentRepository {
  constructor(
    private readonly databaseService: DatabaseService<DocumentModel>,
  ) {}

  async create(createDocumentDto: CreateDocumentDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      INSERT INTO document (
        type,
        person_id
      ) VALUES (
        $1,
        $2
      ) RETURNING *
    `,
      [createDocumentDto.type, createDocumentDto.personId],
    );

    return plainToInstance(DocumentModel, databaseResponse.rows[0]);
  }

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(`
      SELECT * FROM document
    `);

    return plainToInstance(DocumentModel, databaseResponse.rows);
  }

  async getById(id: string) {
    const databaseResponse = await this.databaseService.runQuery(
      `
    SELECT * FROM document WHERE id = $1`,
      [id],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(DocumentModel, entity);
  }

  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE document
      SET type = $2
      WHERE id = $1
      RETURNING *
      `,
      [id, updateDocumentDto.type],
    );

    const [entity] = databaseResponse.rows;

    return plainToInstance(DocumentModel, entity);
  }

  async delete(id: string) {
    await this.databaseService.runQuery(
      `
        DELETE FROM document WHERE id = $1
      `,
      [id],
    );
  }
}
