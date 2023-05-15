import { Exclude } from 'class-transformer';

export class BaseModel {
  @Exclude()
  total_count?: string;
}
