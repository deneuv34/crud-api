import { IUserService, IUser } from './interfaces';
import { UserRepository } from './user.repository';
import { BaseService } from 'common/services/base.service';
import { Users } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends BaseService<IUser, Users> {
    constructor(
        private readonly userRepository: UserRepository,
    ) {
        super(userRepository);
    }

}