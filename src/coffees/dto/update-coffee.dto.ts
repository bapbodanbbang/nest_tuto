//nest i @nestjs/mapped-types를 사용하면 반복적인 타입 설정을 피해서 할 수 있다.
import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

/*
일반적인 방식
export class UpdateCoffeeDto {
  readonly name?: string;
  readonly brand?: string;
  readonly flavor?: string[];
}
*/
