import { IUser } from './interfaces'
import { UserRepository } from './user.repository'
import { BaseService } from '../common/services/base.service'
import { Users } from './user.entity'
import { Injectable } from '@nestjs/common'
import { ADP } from 'helpers/adapters/adapter';

@Injectable()
export class UserService extends BaseService<IUser, Users> {
  constructor(
    private readonly userRepository: UserRepository
  ) {
    super(userRepository)
  }
}
