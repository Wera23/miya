import { User } from '@miya-app/shared-types';
import { RegisterValues } from '../components/Register/RegisterInitialValues';
import { dataService } from './data.service';

function addNewUserForm(values: RegisterValues): User {
  const newUser: User = {
    userId: values.userId,
    username: values.usernameId,
    userPassword: values.userPasswordId,
    dateOfBirth: values.dateOfBirthId,
    userDescription: values.userDescriptionId,
  };
  return newUser;
}

// eslint-disable-next-line
async function postNewUserForm(newUser: User) {
  // eslint-disable-next-line
  await dataService.postNewUser(newUser);
}

export { postNewUserForm, addNewUserForm };
