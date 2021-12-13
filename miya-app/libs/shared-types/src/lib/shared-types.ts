import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class Retriever {
  @IsString() readonly name: string;
  @IsString() readonly age: string;
  @IsString() readonly city: string;
  @IsString() readonly description: string;
  @IsString() readonly gender: string;
  @IsNumber() @IsOptional() readonly id: number;
  @Type(() => Number)
  @IsNumber()
  lat: number;
  @Type(() => Number)
  @IsNumber()
  long: number;
  @IsString() readonly voivodeship: string;
  @IsString() readonly owner: string;
}
