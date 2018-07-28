import { Users } from '../user.entity';
import { IUser } from './IUser';
import { BaseServiceInterface } from 'common/services/base.service.interface';

export interface IUserService extends BaseServiceInterface<IUser, Users> {}