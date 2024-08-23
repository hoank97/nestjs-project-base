import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../../decorator/role.decorator';
import { FindUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guard/auth.guard';
import { RolesGuard } from '../../guard/role.guard';
import { Role } from '../auth/auth.constant';
import { Auth } from '../../decorator/auth.decorator';

@Controller('users')
@ApiTags('User')
@ApiBearerAuth()
@Auth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Post()
  @Roles([Role.ADMIN])
  create(@Body() createUserDto: FindUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findOneById(@Query() data: FindUserDto) {
    return this.usersService.findOneById(Number(data.id));
  }
}
