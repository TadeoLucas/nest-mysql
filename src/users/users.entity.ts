import { Entity, Column, PrimaryColumn } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Entity()
export class User {

  @PrimaryColumn({ type: 'uuid' })
  id: string

  @Column({ unique: true })
  username: string

  @Column()
  name: string

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date
}