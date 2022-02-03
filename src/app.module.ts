import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'
import { ProblemController } from './problem/problem.controller'
import { ProblemService } from './problem/problem.service'

@Module({
    imports: [],
    controllers: [UserController, ProblemController],
    providers: [UserService, ProblemService],
})
export class AppModule {}
