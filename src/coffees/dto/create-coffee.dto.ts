import { IsString } from 'class-validator';

//request bodt에 유효하지 않은 값이 들어오게 된다면 400 코드를 반환한다.
export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
