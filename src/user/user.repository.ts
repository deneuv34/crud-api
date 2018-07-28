import { BaseRepository } from '../common/repositories/base.repository';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from './interfaces';
import { Users } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends BaseRepository<IUser, Users> {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ) {
        super(userRepository);
    }
}