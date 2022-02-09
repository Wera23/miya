import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateRetriever } from './dto/create-retriever.dto';
import { Retriever, RetrieverDokument } from './schema/retriever.schema';

@Injectable()
export class RetrieversRepository {
  constructor(
    @InjectModel(Retriever.name)
    private retrieverModel: Model<RetrieverDokument>,
  ) {}

  async findOneRetriever(
    rertieverFilterQuery: FilterQuery<Retriever>,
  ): Promise<Retriever> {
    return this.retrieverModel.findOne(rertieverFilterQuery);
  }

  async findRetrievers(
    retrieversFilterQuery: FilterQuery<Retriever>,
  ): Promise<Retriever[]> {
    return this.retrieverModel.find(retrieversFilterQuery).exec();
    // return this.retrieverModel.find(retrieversFilterQuery, {relations: ["user"]});
  }

  async createRetriever(retriever: CreateRetriever): Promise<Retriever> {
    const newRetriever = new this.retrieverModel(retriever);
    return newRetriever.save();
  }

  async deleteOneRetriever(
    retrieverFilterQuery: FilterQuery<Retriever>,
  ): Promise<Retriever> {
    return await this.retrieverModel.findOneAndDelete(retrieverFilterQuery);
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
