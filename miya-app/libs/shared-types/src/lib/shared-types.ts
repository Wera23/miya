import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class Retriever {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsString() readonly age: string;
  @IsString() readonly city: string;
  @IsString() readonly voivodeship: string;
  @IsString() readonly gender: string;
  @IsString() readonly owner: string;
  @IsString() readonly description: string;
  @Type(() => Number)
  @IsNumber()
  lat: number;
  @Type(() => Number)
  @IsNumber()
  long: number;
  @IsString() @IsOptional() readonly instagram: string;
  @IsString() @IsOptional() readonly facebook: string;
}
