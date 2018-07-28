import { IUser } from '../interfaces';

export class UserDto implements IUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}