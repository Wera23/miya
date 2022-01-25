export interface EditUserValues {
  dateOfBirthId: string;
  userDescriptionId: string;
  userAddressId: string;
}

export enum EditUserFormTypes {
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userAddress = 'userAddressId',
}
