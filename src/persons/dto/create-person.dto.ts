import { IsString, Length } from 'class-validator';

export class CreatePersonDto {
  @Length(2, 50)
  @IsString()
  firstName: string;

  @Length(2, 50)
  @IsString()
  lastName: string;
}
