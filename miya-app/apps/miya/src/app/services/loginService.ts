import { UserLogin } from '@miya-app/shared-types';
import { LoginValues } from '../components/Users/LoginForm/LoginInitialValues';
import { dataService } from './data.service';

function loginRegisteredUserForm(values: LoginValues): UserLogin {
  const registeredUser: UserLogin = {
    username: values.usernameId,
    password: values.userPasswordId,
  };
  return registeredUser;
}



// eslint-disable-next-line
async function postLoginUserForm(registeredUser: UserLogin) {
  // eslint-disable-next-line
  const response = await dataService.postLoginUser(registeredUser);

  return response.data;
}

export { postLoginUserForm, loginRegisteredUserForm };
