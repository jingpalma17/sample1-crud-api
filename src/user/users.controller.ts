import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  async get(): Promise<User[]> {
    return this.service.getUsers();
  }
}
