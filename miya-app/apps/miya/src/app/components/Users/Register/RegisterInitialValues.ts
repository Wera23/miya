export interface RegisterValues {
  userId: number;
  usernameId: string;
  userPasswordId: string;
  dateOfBirthId: number | Date;
  userDescriptionId: string;
  userVoivodeshipId: string;
  userCityId: string;
  userImageId: string;
  userGenderId: string;
  
}

export const initialValues: RegisterValues = {
  userId: 0,
  usernameId: '',
  userPasswordId: '',
  dateOfBirthId: 0,
  userDescriptionId: '',
  userVoivodeshipId: '',
  userCityId: '',
  userImageId: '',
  userGenderId: '',
};

export enum RegisterFormTypes {
  user = 'userId',
  username = 'usernameId',
  userPassword = 'userPasswordId',
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userVoivodeship = 'userVoivodeshipId',
  userCity = 'userCityId',
  userImage = 'userImageId',
  userGender = 'userGenderId',
}
