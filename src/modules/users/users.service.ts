import { BadRequestException, Injectable } from '@nestjs/common';
import { FindUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from '../auth/auth.constant';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
      role: Role.ADMIN,
    },
    {
      id: 2,
      username: 'string',
      password: 'string',
      role: Role.ADMIN,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  create(createUserDto: FindUserDto) {
    return 'This action adds a new user';
  }

  findOneById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new BadRequestException('NOT_FOUND');
    }
    return user;
  }
}
