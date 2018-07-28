import { Controller, Post, Body, Get, HttpCode, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post()
    @HttpCode(201)
    create(@Body() request: UserDto) {
        return this.userService.create(request);
    }

    @Get()
    getAll(@Body() option?: UserDto) {
        return this.userService.findAll(option);
    }

    @Get(':id') // GET cats/{id}
    finById(@Param('id') id) {
        return this.userService.findById(id);
    }

    @Delete(':id') // Delete cats/{id}
    deleteById(@Param('id') id) {
        return this.userService.delete(id);
    }
}