import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(user: User): Promise<User> {
    delete user.id;
    return this.usersRepository.save(user);
  }

  async find(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async update(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<boolean> {
    await this.usersRepository.delete(id);
    return true;
  }
}
