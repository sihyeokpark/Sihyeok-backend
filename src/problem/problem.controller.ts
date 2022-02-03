import { Controller, Get, Param } from '@nestjs/common'

@Controller('problem')
export class ProblemController {
    constructor(readonly problemService) {}

    @Get('/:id')
    getProblem(@Param('id') problemId: string) {
        return this.problemService.getProblem(problemId)
    }
}
