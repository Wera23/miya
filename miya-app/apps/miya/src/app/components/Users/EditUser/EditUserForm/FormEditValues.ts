export interface EditUserValues {
  dateOfBirthId: string;
  userDescriptionId: string;
  userAddressId: string;
  userImageId: string;
}

export enum EditUserFormTypes {
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userAddress = 'userAddressId',
  userImage = 'userImageId',
}
