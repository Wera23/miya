import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { UploadPhoto } from './schema/uploadPhoto.schema';

@Injectable()
export class UploadPhotoRepository {
  constructor(
    @InjectModel(UploadPhoto.name)
    private uploadPhotoModel: Model<UploadPhoto>,
  ) {}

  async findOnePhoto(
    photoFilterQuery: FilterQuery<UploadPhoto>,
  ): Promise<UploadPhoto> {
    return this.uploadPhotoModel.findOne(photoFilterQuery);
  }

  async findPhotos(
    photosFilterQuery: FilterQuery<UploadPhoto>,
  ): Promise<UploadPhoto[]> {
    return this.uploadPhotoModel.find(photosFilterQuery);
  }

  async addPhoto(uploadPhoto: UploadPhoto): Promise<UploadPhoto> {
    const newPhoto = new this.uploadPhotoModel(uploadPhoto);
    return newPhoto.save();
  }
}
