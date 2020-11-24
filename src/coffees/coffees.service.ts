/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffees.entities';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id:1,
            name:"americano",
            brand:"tomtom",
            flavor:["Sweet"]
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id:string) {
        
        const coffee =  this.coffees.find(item => item.id === +id);
        if(!coffee){
            throw new NotFoundException(`Coffee don't have id : ${id}`)
        }
        return coffee;
    }

    create(createCoffeeDto:any) {
        return this.coffees.push(createCoffeeDto);
    }

    update(id:string, createCoffeDto:any){
        const existCoffee = this.findOne(id);
        if(existCoffee){
            //coding you want
        }
    }

    remove(id:string){
        const coffeeIndex =  this.coffees.findIndex(item => item.id === +id)
        if(coffeeIndex) return this.coffees.splice(coffeeIndex,1);
    }
}
