/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees') // localhost:3000/coffees
export class CoffeesController {
    constructor(private readonly coffeesService:CoffeesService){

    }
    @Get()
    findAll(){
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body){
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.coffeesService.update(id,body)
    }

    @Delete(':id')
    delete(@Param('id') id:string ){
        return this.coffeesService.remove(id);
    }
}
