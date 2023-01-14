import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { v4 as uuid } from 'uuid';
import { Role } from './role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) { }

  create(role: CreateRoleDto) {
    const id = uuid()
    const Complete = { ...role, id }
    const newRole = this.roleRepository.create(Complete)
    return this.roleRepository.save(newRole)
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: string) {
    return this.roleRepository.findOne({ where: { id } });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update({ id }, updateRoleDto);
  }

  remove(id: string) {
    return this.roleRepository.delete({ id });
  }
}
