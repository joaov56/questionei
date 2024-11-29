import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { createHmac } from 'node:crypto';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async execute(userInfo: CreateUserDto) {
    const user = new User();
    user.name = userInfo.name;
    user.email = userInfo.email;
    user.password = createHmac('sha256', userInfo.password).digest('hex');
    user.avatar = userInfo.avatar;
    user.phone = userInfo.phone;

    return this.userRepository.save(user);
  }
}
