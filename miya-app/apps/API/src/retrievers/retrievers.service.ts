import { Injectable } from '@nestjs/common';
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
    instagram: string,
    facebook: string,
    image: string,
  ): Promise<Retriever> {
    return this.retrieversRepository.createRetriever({
      id: Math.random(),
      name,
      age,
      city,
      voivodeship,
      gender,
      description,
      owner,
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
  async removeRetriever(id: number): Promise<Retriever> {
    return this.retrieversRepository.deleteOneRetriever({ id });
  }
}
