import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRetriever } from './dto/create-retriever.dto';
import { UpdateRetriever } from './dto/update-retriever.dto';
import { RetriversService } from './retrievers.service';
import { Retriever } from './schema/retriever.schema';

@Controller('retrievers')
export class RetrieversController {
  constructor(private readonly retrieversService: RetriversService) {}

  @Get()
  async findAllRetrievers(): Promise<Retriever[]> {
    return this.retrieversService.getRetrievers();
  }

  @Get(':id')
  async findRetriever(@Param('id') id: number): Promise<Retriever> {
    return this.retrieversService.getRetrieverById(id);
  }

  @Post()
  createRetriever(@Body() retriever: CreateRetriever) {
    return this.retrieversService.createRetriever(
      retriever.name,
      retriever.age,
      retriever.city,
      retriever.voivodeship,
      retriever.gender,
      retriever.owner,
      retriever.description,
      retriever.lat,
      retriever.long,
      retriever.instagram,
      retriever.facebook,
    );
  }

  @Patch(':id')
  async updateRetriever(
    @Param('id') id: number,
    @Body() retriever: UpdateRetriever,
  ): Promise<Retriever> {
    return this.retrieversService.updateRetriever(id, retriever);
  }

  @Delete(':id')
  async deleteRetriever(@Param('id') id: number): Promise<Retriever> {
    return this.retrieversService.deleteRetriever(id);
  }
}
