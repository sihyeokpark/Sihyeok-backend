import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
    getUser(userId: string) {
        return {
            userId,
        }
    }

    createUser(userData) {
        return {
            ...userData,
        }
    }
}
