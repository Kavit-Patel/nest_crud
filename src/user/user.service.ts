import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: { name: string; email: string }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async getUsers():Promise<User[]>{
    return this.prisma.user.findMany();
  }
  async getUser(id:number):Promise<User | null>{
    return this.prisma.user.findUnique({
      where:{id}
    })
  }
  async updateUser(id:number,data:{name?:string;email?:string}):Promise<User>{
    return this.prisma.user.update({
      where:{id},
      data,
    })
  }
  async deleteUser(id:number):Promise<User>{
    return this.prisma.user.delete({
      where:{id}
    })
  }
}
