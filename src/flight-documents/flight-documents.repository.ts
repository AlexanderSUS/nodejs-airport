import { Injectable } from '@nestjs/common';
import DatabaseService from 'src/database/database.service';
import { plainToInstance } from 'class-transformer';
import { FlightDocumentsModel } from './flight-documents.model';
import { CreateFlightDocumentDto } from './dto/create-flight-document.dto';
import { UpdateFlightDocumentDto } from './dto/update-flight-document.dto';

@Injectable()
export class FlightDocumentRepository {
  constructor(
    private readonly databaseService: DatabaseService<FlightDocumentsModel>,
  ) {}

  async create(createFlightDocumentsDto: CreateFlightDocumentDto) {
    const databaseResponse = await this.databaseService.runQuery(
      `
        INSERT INTO flight_document (
          flight_id,
          document_id
        ) VALUES (
          $1,
          $2
        ) RETURNING *
      `,
      [createFlightDocumentsDto.flightId, createFlightDocumentsDto.documentId],
    );

    return plainToInstance(FlightDocumentsModel, databaseResponse.rows[0]);
  }

  async getAll() {
    const databaseResponse = await this.databaseService.runQuery(
      `
        SELECT * FROM flight_document
      `,
    );

    return plainToInstance(FlightDocumentsModel, databaseResponse.rows);
  }

  async update(
    flightId: string,
    documentId: string,
    updateFlightDocumentsDto: UpdateFlightDocumentDto,
  ) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      UPDATE flight_document
      SET flight_id = $3, document_id = $4
      WHERE flight_id = $1 AND document_id = $2
      RETURNING *
    `,
      [
        flightId,
        documentId,
        updateFlightDocumentsDto.flightId,
        updateFlightDocumentsDto.documentId,
      ],
    );

    return plainToInstance(FlightDocumentsModel, databaseResponse.rows[0]);
  }

  async delete(flightId: string, documentId: string) {
    await this.databaseService.runQuery(
      `
        DELETE FROM flight_document WHERE flight_id = $1 AND document_id = $2
      `,
      [flightId, documentId],
    );
  }
}