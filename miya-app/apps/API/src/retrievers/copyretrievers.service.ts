// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { RetrieverTypes } from './model/retriever.model';
// import { Retrievers } from './model/retrievers.model';

// @Injectable()
// export class RetrieversService {
//   private readonly retrievers: Retrievers = {
//     1: {
//       name: 'Miya',
//       age: '6 miesięcy',
//       city: 'Katowice',
//       description: '',
//       gender: 'Female',
//       id: 1,
//       lat: 50.26,
//       long: 19.02,
//       voivodeship: 'Silesia',
//       owner: '',
//     },
//   };

//   constructor(
//     @InjectModel('Retriever')
//     private readonly retrieverModel: Model<Retriever>,
//   ) {}

//   async insertRetriever(
//     name: string,
//     age: string,
//     city: string,
//     voivodeship: string,
//     id: number,
//   ) {
//     const newRetriever = new this.retrieverModel({
//       name,
//       age,
//       city,
//       voivodeship,
//       id,
//     });
//     const result = await newRetriever.save();
//     console.log('add', result);
//   }

//   findAllRetrievers(): Retrievers {
//     return this.retrievers;
//   }

//   createRetriever(newRetriever: RetrieverTypes) {
//     const id = Date.now();
//     this.retrieverModel[id] = { ...newRetriever, id };
//   }

//   findRetriever(id: number): RetrieverTypes {
//     const retriever: RetrieverTypes = this.retrieverModel[id];
//     if (!retriever) throw new Error('No retrievers found.');
//     return retriever;
//   }

//   updateRetriever(retriever: RetrieverTypes) {
//     if (!this.retrieverModel[retriever.id])
//       throw new Error('No retriever found');
//     this.retrieverModel[retriever.id] = retriever;
//   }

//   deleteRetriever(id: number) {
//     const retriever: RetrieverTypes = this.retrieverModel[id];
//     if (!retriever) throw new Error('No retriever found');

//     delete this.retrieverModel[id];
//   }
// }
