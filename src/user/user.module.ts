import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserRepository } from './user.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './user.entity'
import { UserController } from './user.controller'
import { ADP } from '../helpers/adapters/adapter';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService, UserRepository, ADP],
  controllers: [UserController]
})
export class UserModule {}
