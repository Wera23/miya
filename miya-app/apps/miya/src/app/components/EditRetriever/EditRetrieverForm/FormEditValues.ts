
export interface EditRetrieverValues {
    idId: number;
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
  }
  
  export const editValues: EditRetrieverValues = {
    idId: 0,
    nameId: '',
    ageId: '',
    cityId: '',
    voivodeshipId: '',
    ownerId: '',
    descriptionId: '',
    latId: 0,
    longId: 0,
    instagramId: '',
    facebookId: '',
  };
  
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
  }
  