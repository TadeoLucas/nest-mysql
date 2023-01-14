import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  createUserService(user: CreateUserDto) {
    const newUser = this.userRepository.create(user)
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

  deleteUserServices(id: string) {
    return this.userRepository.delete({ id })
  }

  updateUserServices(id: string, user: UpdateUserDto) {
    return this.userRepository.update({id}, user)
  }
} 
