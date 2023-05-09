// import { BaseRepository } from './interface/base-repository.interface';
// import { Inject } from '@nestjs/common';
// import DatabaseService from './database.service';
// import { plainToInstance } from 'class-transformer';

// export abstract class PgRepository<T> implements BaseRepository<T> {
//   constructor(
//     private readonly databaseService: DatabaseService<T>,
//     @Inject('TABLE_NAME') private tableName: string,
//   ) {}

//   async findAll(): Promise<T[]> {
//     const databaseResponse = await this.databaseService.runQuery(`
//       SELECT * FROM ${this.tableName}
//     `);

//     return databaseResponse.rows;
//   }

//   async findOneById(id: string): Promise<T> {
//     const databaseResponse = await this.databaseService.runQuery(
//       `
//       SELECT * FROM ${this.tableName} WHERE id=$1
//     `,
//       [id],
//     );

//     return databaseResponse.rows[0];
//   }

//   async create(item: T): Promise<T> {
//     const databaseResponse = await this.databaseService.runQuery(
//       `INSERT INTO ${this.tableName} (

//       ) VALUES (

//       ) RETURNING *`, [

//       ],
//     )

//     return plainToInstance(model, databaseResponse.rows[0]);
//   }

//   update(id: string, item: Partial<T>): Promise<T> {}

//   async delete(id: string): Promise<void> {
//     await this.databaseService.runQuery(
//       `
//       DELETE FROM ${this.tableName} WHERE id=$1
//     `,
//       [id],
//     );
//   }
// }
