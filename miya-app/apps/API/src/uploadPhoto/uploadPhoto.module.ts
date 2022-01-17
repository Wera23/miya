import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UploadPhoto, UploadPhotoSchema } from './schema/uploadPhoto.schema';
import { UploadPhotoService } from './uploadPhoto.service';
import { UploadPhotoRepository } from './uploadPhoto.repository';
import { UploadPhotoController } from './uploadPhoto.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UploadPhoto.name, schema: UploadPhotoSchema },
    ]),
  ],
  providers: [UploadPhotoService, UploadPhotoRepository],
  controllers: [UploadPhotoController],
})
export class UploadPhotoModule {}
