import { User } from '@miya-app/shared-types';
// import { EditUserValues } from '../components/Users/EditUser/EditUserForm/FormEditValues';
import { RegisterValues } from '../components/Users/Register/RegisterInitialValues';
import { dataService } from './data.service';

function addNewUserForm(values: RegisterValues): User {
  const newUser: User = {
    username: values.usernameId,
    userPassword: values.userPasswordId,
    dateOfBirth: values.dateOfBirthId,
    userDescription: values.userDescriptionId,
    userVoivodeship: values.userVoivodeshipId,
    userCity: values.userCityId,
    userImage: values.userImageId,
    userGender: values.userGenderId,
    userGreet: values.userGreetId,
    isActive: values.isActiveId,
  };
  return newUser;
}

// eslint-disable-next-line
async function postNewUserForm(newUser: User) {
  // eslint-disable-next-line
  const response = await dataService.postNewUser(newUser);

  return response.data;
}

export { postNewUserForm, addNewUserForm };
