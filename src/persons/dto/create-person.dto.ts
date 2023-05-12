import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreatePersonDto {
  @ApiProperty({
    example: 'Ashtyn',
  })
  @Length(2, 50)
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Hoppe',
  })
  @Length(2, 50)
  @IsString()
  lastName: string;
}
