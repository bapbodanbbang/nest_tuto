/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffees.entities';
import { FlavorEntity } from './entities/flavor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, FlavorEntity])],
    controllers: [CoffeesController], 
    providers: [CoffeesService]
})
export class CoffeesModule {}
