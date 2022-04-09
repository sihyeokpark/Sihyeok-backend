import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

type IUser = {
    id: string
    password: string
}

@Injectable()
export class UserService {
    prisma = new PrismaClient()

    async isUserExist(userId: string): Promise<false | IUser> {
        const user: IUser = await this.prisma.user.findUnique({
            where: { id: userId },
        })
        if (user) return user
        else return false
    }

    async getUser(userId: string) {
        const user: IUser | false = await this.isUserExist(userId)
        if (user) return { ...user }
        else throw new NotFoundException(`${userId} is not exist`)
    }

    async createUser(userData) {
        const oldUser: IUser | false = await this.isUserExist(userData.id)
        if (oldUser)
            throw new NotFoundException(`Already Id ${oldUser.id} exist`)
        const newUser = await this.prisma.user.create({
            data: {
                id: userData.id,
                password: userData.password,
            },
        })
        return { ...newUser }
    }
}
