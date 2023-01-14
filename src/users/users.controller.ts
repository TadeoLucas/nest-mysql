import { Controller, Post, Get, Delete, Patch, Body, Param, HttpException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Post()
  async createUser(@Body() newUser: CreateUserDto): Promise<User | HttpException> {
    return this.userService.createUserService(newUser)
  }

@Get()
getAll(): Promise < User[] > {
  return this.userService.findAllServices()
}

@Get(':email')
getUserByAnyColumn(@Param('email') email: string): Promise < User > {
  return this.userService.findUserServices(email)
}

@Delete(':id')
deleteUSer(@Param('id') id: string) {
  return this.userService.deleteUserServices(id)
}

@Patch(':id')
updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
  return this.userService.updateUserServices(id, user)
}
}
