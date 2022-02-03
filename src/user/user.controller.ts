import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(readonly userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') userId: string) {
        return this.userService.getUser(userId)
    }

    @Post()
    createUser(@Body() userData) {
        return this.userService.createUser(userData)
    }
}
