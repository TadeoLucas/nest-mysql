import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  createUserService(user: CreateUserDto) {
    const id = uuid()
    const userComplete = { ...user, id }
    const newUser = this.userRepository.create(userComplete)
    return this.userRepository.save(newUser)
  }

  findAllServices() {
    return this.userRepository.find()
  }

  findUserServices(email: string) {
    return this.userRepository.findOne({
      where: {
        email
      }
    })
  }

  updateUserServices(id: string, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user)
  }

  deleteUserServices(id: string) {
    return this.userRepository.delete({ id })
  }

} 
