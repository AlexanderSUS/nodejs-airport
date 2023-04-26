import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateAircraftDto {
  @Length(1, 255)
  @IsString()
  make: string;

  @Length(1, 255)
  @IsString()
  model: string;

  @Max(1000)
  @Min(1)
  @IsNumber()
  seats: number;
}
