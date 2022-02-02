export interface EditUserValues {
  dateOfBirthId: number | Date;
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
