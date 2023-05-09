export type AnyObject = { id: string } & Record<string, any>;

export type ID = string | number;

export interface FindOptions<T> {
  select: Array<keyof T>;
}
