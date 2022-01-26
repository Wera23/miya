export interface RegisterValues {
  userId: number;
  usernameId: string;
  userPasswordId: string;
  dateOfBirthId: string;
  userDescriptionId: string;
  userAddressId: string;
  userImageId: string;
}

export const initialValues: RegisterValues = {
  userId: 0,
  usernameId: '',
  userPasswordId: '',
  dateOfBirthId: '',
  userDescriptionId: '',
  userAddressId: '',
  userImageId: '',
};

export enum RegisterFormTypes {
  user = 'userId',
  username = 'usernameId',
  userPassword = 'userPasswordId',
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userAddress = 'userAddressId',
  userImage = 'userImageId',
}
