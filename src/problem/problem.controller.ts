import { Controller, Get, Param } from '@nestjs/common'
import { ProblemService } from './problem.service'

@Controller('problem')
export class ProblemController {
    constructor(readonly problemService: ProblemService) {}

    @Get('/:id')
    getProblem(@Param('id') problemId: string) {
        return this.problemService.getProblem(problemId)
    }
}
