export interface BaseRepository<T> {
  findAll(): Promise<T[]>;
  findOneById(id: string): Promise<T>;
  create(item: T): Promise<T>;
  // TODO add OMIT<T, 'id>
  update(id: string, item: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}
