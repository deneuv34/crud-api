import BaseEntity from '../common/entity/base.entity'
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'
import { IUser } from './interfaces'

@Entity()
export class Users extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Column('varchar') first_name: string

  @Column('varchar') last_name: string

  @Column('varchar') email: string

  @Column('varchar') password: string
}
