import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Retriever } from './retriever.model';
import { Retrievers } from './retrievers.model';
import { RetrieversService } from './retrievers.service';

// import { Retriever } from "@miya-app/shared-types";

@Controller('retrievers')
export class RetrieversController {
  constructor(private readonly retrieversService: RetrieversService) {}

  @Get()
  async findAllRetrievers(): Promise<Retrievers> {
    return this.retrieversService.findAllRetrievers();
  }

  @Get(':id')
  async findRetriever(@Param('id') id: number): Promise<Retriever> {
    return this.retrieversService.findRetriever(id);
  }

  @Post()
  createRetriever(@Body() retriever: Retriever) {
    this.retrieversService.createRetriever(retriever);
  }

  @Put()
  updateRetriever(@Body() retriever: Retriever) {
    this.retrieversService.updateRetriever(retriever);
  }

  @Delete(':id')
  deleteRetriever(@Param('id') id: number) {
    this.retrieversService.deleteRetriever(id);
  }
}
