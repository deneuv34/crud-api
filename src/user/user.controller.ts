import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  Param,
  Delete,
  Patch
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // POST user/
  @HttpCode(201)
  create(@Body() request: UserDto) {
    return this.userService.create(request)
  }

  @Get() // GET user/
  getAll(@Body() option?: UserDto) {
    return this.userService.findAll(option)
  }

  @Get(':id') // GET user/{id}
  finById(@Param('id') id) {
    return this.userService.findById(id)
  }

  @Delete(':id') // Delete user/{id}
  deleteById(@Param('id') id) {
    return this.userService.delete(id)
  }

  @Patch(':id') // PATCH user/{id}
  update(@Param() param) {
    return this.userService.update(param.id, param)
  }
}
