import { ApiProperty } from '@nestjs/swagger';
import { TestPipe } from '../../../decorator/custom-validator.decorator';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class FindUserDto {
  @ApiProperty({
    type: Number,
  })
  @Type(() => Number)
  @IsNumber()
  id: number;
}
