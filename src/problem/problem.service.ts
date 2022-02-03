import { Injectable } from '@nestjs/common'

@Injectable()
export class ProblemService {
    getProblem(problemId: string) {
        return {
            problemId,
        }
    }
}
