import {
  Controller,
  Get,
  Delete,
  Post,
  Param,
  Body,
  Put,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.service.getAll();
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<User> {
    return this.service.find(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.service.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    user.id = +id; // TODO user parseint pipe instead
    return this.service.update(user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.service.remove(id);
  }
}
