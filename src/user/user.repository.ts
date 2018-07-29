import { BaseRepository } from '../common/repositories/base.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Users } from './user.entity'
import { Injectable } from '@nestjs/common';
import { ADP } from '../helpers/adapters/adapter';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserRepository extends BaseRepository<UserDto, Users> {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    adapter: ADP<Users>
  ) {
    super(userRepository, adapter)
  }
}
