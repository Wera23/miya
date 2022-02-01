import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { CreateRetriever } from './dto/create-retriever.dto';
import { UpdateRetriever } from './dto/update-retriever.dto';
import { RetriversService } from './retrievers.service';
import { Retriever } from './schema/retriever.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { of } from 'rxjs';

import { diskStorage } from 'multer';
import { createReadStream } from 'fs';
import { join } from 'path';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('retrievers')
export class RetrieversController {
  constructor(private readonly retrieversService: RetriversService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllRetrievers(): Promise<Retriever[]> {
    return this.retrieversService.getRetrievers();
  }

  @UseGuards(JwtAuthGuard)
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
      retriever.image,
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

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'files',
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log(response);
    return response;
  }

  @Get('files/:imagename')
  seeUploadedFile(@Param('imagename') imagename, @Res() res) {
    return of(res.sendFile(join(process.cwd(), 'files/' + imagename)));
  }

  @Get()
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }
}
