import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserService } from '../services/create-user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }

  @Get()
  findAll() {
    return '';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      updateUserDto,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      id,
    };
  }
}
