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

  findUserByEmailServices(email: string) {
    // para poder extraer el password hasheado desde la base
    // dado q esta bloqueado desde user.entity 
    return this.userRepository
              .createQueryBuilder('user')
              .where({ email })
              .addSelect('user.password')
              .getOne()
  }

  updateUserServices(id: string, user: UpdateUserDto) {
    return this.userRepository.update({ id }, user)
  }

  deleteUserServices(id: string) {
    return this.userRepository.delete({ id })
  }

} 
