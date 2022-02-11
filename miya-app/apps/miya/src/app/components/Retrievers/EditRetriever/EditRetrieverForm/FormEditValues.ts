export interface EditRetrieverValues {
  nameId: string;
  ageId: string;
  cityId: string;
  voivodeshipId: string;
  descriptionId: string;
  instagramId: string;
  facebookId: string;
  imageId: string;
}

export enum RetrieverFormTypes {
  name = 'nameId',
  age = 'ageId',
  city = 'cityId',
  voivodeship = 'voivodeshipId',
  description = 'descriptionId',
  instagram = 'instagramId',
  facebook = 'facebookId',
  image = 'imageId',
}
