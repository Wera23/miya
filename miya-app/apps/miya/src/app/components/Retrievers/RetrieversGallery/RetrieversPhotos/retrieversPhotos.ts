import { photo1, photo2, photo3, photo4 } from './photos';

interface RetrieversPhotosTypes {
  image: string;
  title: string;
}

export const retrieversPhotos: RetrieversPhotosTypes[] = [
  {
    image: photo1,
    title: 'Photo1',
  },
  {
    image: photo2,
    title: 'Photo2',
  },
  {
    image: photo3,
    title: 'Photo3',
  },
  {
    image: photo4,
    title: 'Photo4',
  },
];
