import { IsString, IsNumber, IsOptional } from 'class-validator';

export class Location {
  @IsNumber() lat: number;
  @IsNumber() long: number;
}

export class Retriever {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsString() readonly gender: string;
  @IsString() readonly voivodeship: string;
  @IsOptional() readonly location: Location;
  @IsString() readonly city: string;
  @IsString() readonly description: string;
  @IsString() readonly age: string;
  @IsString() readonly owner: string;
}
