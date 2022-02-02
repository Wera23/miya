export interface NewRetrieverValues {
  nameId: string;
  ageId: string;
  genderId: string;
  cityId: string;
  voivodeshipId: string;
  ownerId: string;
  descriptionId: string;
  latId: number;
  longId: number;
  instagramId: string;
  facebookId: string;
  imageId: string;
}

export const initialValues: NewRetrieverValues = {
  nameId: '',
  ageId: '',
  genderId: '',
  cityId: '',
  voivodeshipId: '',
  ownerId: '',
  descriptionId: '',
  latId: 0,
  longId: 0,
  instagramId: '',
  facebookId: '',
  imageId: '',
};

export enum RetrieverFormTypes {
  name = 'nameId',
  age = 'ageId',
  city = 'cityId',
  voivodeship = 'voivodeshipId',
  gender = 'genderId',
  owner = 'ownerId',
  description = 'descriptionId',
  lat = 'latId',
  long = 'longId',
  instagram = 'instagramId',
  facebook = 'facebookId',
  image = 'imageId',
}
