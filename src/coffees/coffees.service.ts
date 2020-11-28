/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './entities/coffees.entities';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { FlavorEntity } from './entities/flavor.entity';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private readonly coffeRepository: Repository<Coffee>,
        @InjectRepository(FlavorEntity)
        private readonly flavorRepositroy: Repository<FlavorEntity>
    ) {}

    findAll() {
        return this.coffeRepository.find({
            relations: ['flavors']
        });
    }

    async findOne(id:string) {
        
        const coffee =  await this.coffeRepository.findOne(id, {
            relations: ['flavors']
        });
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
