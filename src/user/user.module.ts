import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserRepository } from './user.repository'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from './user.entity'
import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UserService, UserRepository],
  controllers: [UserController]
})
export class UserModule {}
