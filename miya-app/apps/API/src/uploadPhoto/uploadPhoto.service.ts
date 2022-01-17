import { Injectable } from '@nestjs/common';
import { UploadPhoto } from './schema/uploadPhoto.schema';
import { UploadPhotoRepository } from './uploadPhoto.repository';

@Injectable()
export class UploadPhotoService {
  constructor(private readonly uploadPhotoRepository: UploadPhotoRepository) {}

  async getPhotoById(id: number): Promise<UploadPhoto> {
    return this.uploadPhotoRepository.findOnePhoto({ id });
  }

  async getUploadPhotos(): Promise<UploadPhoto[]> {
    return this.uploadPhotoRepository.findPhotos({});
  }

  async uploadPhoto(name: string): Promise<UploadPhoto> {
    return this.uploadPhotoRepository.addPhoto({
      id: Date.now(),
      name,
    });
  }
}
