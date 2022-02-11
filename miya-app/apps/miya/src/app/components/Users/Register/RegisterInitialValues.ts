export interface RegisterValues {
  usernameId: string;
  userPasswordId: string;
  dateOfBirthId: number | Date;
  userGreetId: boolean;
  isActiveId: boolean;
  userDescriptionId: string;
  userVoivodeshipId: string;
  userCityId: string;
  userImageId: string;
  userGenderId: string;
}

export const initialValues: RegisterValues = {
  usernameId: '',
  dateOfBirthId: 0,
  userPasswordId: '',
  userGreetId: false,
  isActiveId: false,
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
  userGreet = 'userGreetId',
  isActive = 'isActiveId',
  dateOfBirth = 'dateOfBirthId',
  userDescription = 'userDescriptionId',
  userVoivodeship = 'userVoivodeshipId',
  userCity = 'userCityId',
  userImage = 'userImageId',
  userGender = 'userGenderId',
}
