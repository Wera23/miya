import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Retriever } from './schema/retriever.schema';

@Injectable()
export class RetrieversRepository {
  constructor(
    @InjectModel(Retriever.name)
    private retrieverModel: Model<Retriever>,
  ) {}

  async findOneRetriever(
    rertieverFilterQuery: FilterQuery<Retriever>,
  ): Promise<Retriever> {
    return this.retrieverModel.findOne(rertieverFilterQuery);
  }

  async findRetrievers(
    retrieversFilterQuery: FilterQuery<Retriever>,
  ): Promise<Retriever[]> {
    return this.retrieverModel.find(retrieversFilterQuery);
  }

  async createRetriever(retriever: Retriever): Promise<Retriever> {
    const newRetriever = new this.retrieverModel(retriever);
    return newRetriever.save();
  }

  async deleteOneRetriever(id: number): Promise<Retriever> {
    return await this.retrieverModel.findByIdAndDelete(id);
  }

  async findOneRetrieverAndUpdate(
    retrieverFilterQuery: FilterQuery<Retriever>,
    retriever: Partial<Retriever>,
  ): Promise<Retriever> {
    return this.retrieverModel.findOneAndUpdate(
      retrieverFilterQuery,
      retriever,
      {
        new: true,
      },
    );
  }
}
