import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateAircraftDto {
  @ApiProperty({
    example: 'Boeing',
  })
  @Length(1, 255)
  @IsString()
  make: string;

  @ApiProperty({
    example: '737-800',
  })
  @Length(1, 255)
  @IsString()
  model: string;

  @ApiProperty({
    example: 320,
  })
  @Max(1000)
  @Min(1)
  @IsNumber()
  seats: number;
}
