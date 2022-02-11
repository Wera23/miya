export interface NewRetrieverValues {
  nameId: string;
  ageId: string;
  genderId: string;
  cityId: string;
  voivodeshipId: string;
  ownerId: string;
  descriptionId: string;
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
  instagram = 'instagramId',
  facebook = 'facebookId',
  image = 'imageId',
}
