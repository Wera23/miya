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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadPhotoService } from './uploadPhoto.service';
import { UploadPhoto } from './schema/uploadPhoto.schema';

@Controller('uploadPhoto')
export class UploadPhotoController {
  constructor(private readonly uploadPhotoService: UploadPhotoService) {}

  @Get()
  async findAllPhotos(): Promise<UploadPhoto[]> {
    return this.uploadPhotoService.getUploadPhotos();
  }

  @Get(':id')
  async findPhoto(@Param('id') id: number): Promise<UploadPhoto> {
    return this.uploadPhotoService.getPhotoById(id);
  }

  //   @Post()
  //   addPhoto(@Body() addPhoto: AddPhoto) {
  //     return this.uploadPhotoService.uploadPhoto(addPhoto.name);
  //   }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('upload', {
      dest: './uploads',
    }),
  )
  uploadSingle(@UploadedFile() file) {
    console.log(file);
  }

  @Post('file-upload')
  @UseInterceptors(FileInterceptor('file'))
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     console.log(file);
//   }
  uploadFile(
    @Body() body: UploadPhoto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
