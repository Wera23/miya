import { Retriever } from "@miya-app/shared-types";

export interface RegisterValues {
  userId: number;
  usernameId: string;
  userPasswordId: string;
  dateOfBirthId: string;
  userDescriptionId: string;
  userAddressId: string;
  retrieverId: Retriever;
}

export const initialValues: RegisterValues = {
  userId: 0,
  usernameId: '',
  userPasswordId: '',
  dateOfBirthId: '',
  userDescriptionId: '',
  userAddressId: '',
  retrieverId: {
    name: "",
    description: "",
    instagram: "",
    city: "",
    facebook: "",
    gender: "",
    owner: "",
    lat: 0,
    long: 0,
    voivodeship: "",
    id: 0,
    age: "",
  },
};

export enum RegisterFormTypes {
  user = 'userId',
  username = 'usernameId',
  userPassword = 'userPasswordId',
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userAddress = 'userAddressId'
}
