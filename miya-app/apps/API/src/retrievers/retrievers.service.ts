import { Injectable } from '@nestjs/common';
import { User } from 'src/users/schema/user.schema';
import { UpdateRetriever } from './dto/update-retriever.dto';
import { RetrieversRepository } from './retrievers.repository';
import { Retriever } from './schema/retriever.schema';

@Injectable()
export class RetriversService {
  constructor(private readonly retrieversRepository: RetrieversRepository) {}

  async getRetrievers(): Promise<Retriever[]> {
    return this.retrieversRepository.findRetrievers({});
  }

  async getRetrieverById(id: number): Promise<Retriever> {
    return this.retrieversRepository.findOneRetriever({ id });
  }

  async createRetriever(
    name: string,
    age: string,
    city: string,
    voivodeship: string,
    gender: string,
    owner: string,
    description: string,
    lat: number,
    long: number,
    instagram: string,
    facebook: string,
    image: string,
  ): Promise<Retriever> {
    return this.retrieversRepository.createRetriever({
      id: Date.now(),
      name,
      age,
      city,
      voivodeship,
      gender,
      description,
      owner,
      lat,
      long,
      instagram,
      facebook,
      image,
    });
  }

  async updateRetriever(
    id: number,
    retrieverUpdates: UpdateRetriever,
  ): Promise<Retriever> {
    return this.retrieversRepository.findOneRetrieverAndUpdate(
      { id },
      retrieverUpdates,
    );
  }
}
