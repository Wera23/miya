export interface EditRetrieverValues {
  nameId: string;
  ageId: string;
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

export enum RetrieverFormTypes {
  name = 'nameId',
  age = 'ageId',
  city = 'cityId',
  voivodeship = 'voivodeshipId',
  owner = 'ownerId',
  description = 'descriptionId',
  lat = 'latId',
  long = 'longId',
  instagram = 'instagramId',
  facebook = 'facebookId',
  image = 'imageId',
}
