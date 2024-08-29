import { Controller,Get,Post,Body,Param,Put,Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("users")
export class UserController {
    constructor(private readonly userService:UserService){}
    @Post()
    create(@Body() data:{name:string;email:string}){
        return this.userService.createUser(data)
    }
    @Get()
    findAll(){
        return this.userService.getUsers()
    }
    @Get(":id")
    findOne(@Param('id') id:string){
        return this.userService.getUser(Number(id))
    }
    @Put(":id")
    update(@Param('id') id:string,@Body() data:{name?:string;email?:string}){
        return this.userService.updateUser(Number(id),data)
    }
    @Delete(":id")
    remove(@Param("id") id:string){
        return this.userService.deleteUser(Number(id))
    }
}
