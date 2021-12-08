import { Injectable } from '@nestjs/common';
import { Retriever } from '../retriever';
import { Retrievers } from '../retrievers';

@Injectable()
export class RetrieversService {
  private readonly retrievers: Retrievers = {
    1: {
      id: 1,
      name: 'Miya',
      gender: 'Female',
      age: '6 miesięcy',
      city: 'Katowice',
      description: '',
      location: {
        lat: 50.26,
        long: 19.02,
      },
      owner: '',
      voivodeship: 'Silesia',
    },
  };

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
