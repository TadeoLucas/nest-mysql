import { hash } from 'bcryptjs';
import { Role } from 'src/role/role.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Entity()
export class User {

  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ nullable: false, unique: true })
  account_name: string;

  @Column()
  firstName: string | undefined;

  @Column()
  lastName: string | undefined;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Role, role => role.roles )
  user: User;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPasword() {
    if(!this.password) {
      return
    }
    this.password = await hash(this.password, 8)
  }
}