import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Retriever, RetrieverTypes } from './retriever.model';
import { Retrievers } from './retrievers.model';

@Injectable()
export class RetrieversService {
  private readonly retrievers: Retrievers = {
    1: {
      name: 'Miya',
      age: '6 miesięcy',
      city: 'Katowice',
      description: '',
      gender: 'Female',
      id: 1,
      lat: 50.26,
      long: 19.02,
      voivodeship: 'Silesia',
      owner: '',
    },
  };

  constructor(
    @InjectModel('Retriever')
    private readonly retrieverModel: Model<RetrieverTypes>,
  ) {}

  findAllRetrievers(): Retrievers {
    return this.retrievers;
  }

  createRetriever(newRetriever: Retriever) {
    const id = Date.now();
    this.retrievers[id] = { ...newRetriever, id };
  }

  findRetriever(id: number): Retriever {
    const retriever: Retriever = this.retrievers[id];
    if (!retriever) throw new Error('No retrievers found.');
    return retriever;
  }

  updateRetriever(retriever: Retriever) {
    if (!this.retrievers[retriever.id]) throw new Error('No retriever found');
    this.retrievers[retriever.id] = retriever;
  }

  deleteRetriever(id: number) {
    const retriever: Retriever = this.retrievers[id];
    if (!retriever) throw new Error('No retriever found');

    delete this.retrievers[id];
  }
}
