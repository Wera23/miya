import { Injectable } from '@nestjs/common';
import { UpdateRetriever } from './dto/update-retriever.dto';
import { RetrieversRepository } from './retrievers.repository';
import { Retriever } from './schema/retriever.schema';

@Injectable()
export class RetriversService {
  constructor(private readonly retrieversRepository: RetrieversRepository) {}

  async getRetrieverById(id: number): Promise<Retriever> {
    return this.retrieversRepository.findOneRetriever({ id });
  }

  async getRetrievers(): Promise<Retriever[]> {
    return this.retrieversRepository.findRetrievers({});
  }

  async createRetriever(
    name: string,
    age: string,
    city: string,
    voivodeship: string,
    owner: string,
    description: string,
    lat: number,
    long: number,
  ): Promise<Retriever> {
    return this.retrieversRepository.createRetriever({
      id: Date.now(),
      name,
      age,
      city,
      voivodeship,
      description,
      owner,
      lat,
      long,
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
