import { Controller, Post, Get, Delete, Patch, Body, Param, HttpException } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';


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
