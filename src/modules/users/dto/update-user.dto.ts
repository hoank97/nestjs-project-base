import { PartialType } from '@nestjs/swagger';
import { FindUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(FindUserDto) {}
