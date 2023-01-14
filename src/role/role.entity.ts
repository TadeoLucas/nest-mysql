import { User } from 'src/users/users.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Entity({ name: 'role' })
export class Role {

  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ unique: true })
  access: string

  @OneToMany(() => User, user => user.user)
  roles: User[]
}