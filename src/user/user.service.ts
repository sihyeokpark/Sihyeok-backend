import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class UserService {
    prisma = new PrismaClient()
    getUser(userId: string) {
        return {
            userId,
        }
    }

    async createUser(userData) {
        const oldUser = await this.prisma.user.findUnique({
            where: { id: userData.id },
        })
        if (oldUser) {
            return {
                statusCode: 500,
                message: 'Already userId exist',
            }
        }
        const newUser = await this.prisma.user.create({
            data: {
                id: userData.id,
                password: userData.password,
            },
        })
        return {
            ...newUser,
        }
    }
}
