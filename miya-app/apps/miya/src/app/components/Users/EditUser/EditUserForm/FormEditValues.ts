export interface EditUserValues {
  dateOfBirthId: number | Date;
  userDescriptionId: string;
  userVoivodeshipId: string;
  userCityId: string;
  userImageId: string;
  userGenderId: string;
}

export enum EditUserFormTypes {
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userVoivodeship = 'userVoivodeshipId',
  userCity = 'userCityId',
  userImage = 'userImageId',
  userGender = 'userGenderId',
}
