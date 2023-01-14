import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { ACCES_TYPES } from './dto/create-role.dto';
// import { v4 as uuid } from 'uuid';

@Entity({ name: 'role' })
export class Role {

  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ unique: true })
  access: ACCES_TYPES

  @OneToMany(() => User, user => user.user)
  roles: User[]
}