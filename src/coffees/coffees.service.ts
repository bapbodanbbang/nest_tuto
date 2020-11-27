/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffees.entities';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeRepository: Repository<Coffee>
    ) {}

    findAll() {
        return this.coffeRepository.find();
    }

    async findOne(id:string) {
        
        const coffee =  await this.coffeRepository.findOne(id);
        if(!coffee){
            throw new NotFoundException(`Coffee don't have id : ${id}`)
        }
        return coffee;
    }

    create(createCoffeeDto:any) {
        const coffee =  this.coffeRepository.create(createCoffeeDto);
        return this.coffeRepository.save(coffee);
    }

    async update(id:string, updateCoffeeDto: UpdateCoffeeDto){
        const existCoffee = await this.coffeRepository.preload({
            id: +id,
            ...updateCoffeeDto
        });
        if(!existCoffee){
            throw new NotFoundException(`Coffee ${id} is not found`);
        }
        return this.coffeRepository.save(existCoffee);
    }

    async remove(id:string){
        const coffee = await this.findOne(id);
        return this.coffeRepository.remove(coffee);
    }
}
