import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees') // localhost:3000/coffees
export class CoffeesController {
    @Get()
    findAll(){
        return 'this is coffees page'
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `id is ${id}`
    }

    @Post()
    create(@Body('name') body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `update ${id} with body ${body}`
    }

    @Delete(':id')
    delete(@Param('id') id:string ){
        return `remove ${id}`
    }
}
