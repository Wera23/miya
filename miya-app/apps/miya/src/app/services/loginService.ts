import { EditUser, User, UserLogin } from '@miya-app/shared-types';
import { EditUserValues } from '../components/Users/EditUser/EditUserForm/FormEditValues';
import { LoginValues } from '../components/Users/LoginForm/LoginInitialValues';
import { dataService } from './data.service';

// eslint-disable-next-line
function loginRegisteredUserForm(values: LoginValues): UserLogin {
  const registeredUser: UserLogin = {
    username: values.usernameId,
    password: values.userPasswordId,
  };
  return registeredUser;
}

function editUserForm(values: EditUserValues): EditUser {
  const updateUser: EditUser = {
    dateOfBirth: values?.dateOfBirthId,
    userDescription: values?.userDescriptionId,
    userAddress: values?.userAddressId,
    userImage: values?.userImageId,
  };
  return updateUser;
}

function detailsOfTheCurrentUser(user: User): User {
  const currentUser: User = {
    userId: user.userId,
    username: user.username,
    userDescription: user.userDescription,
    dateOfBirth: user.dateOfBirth,
    userPassword: user.userPassword,
    userAddress: user.userAddress,
    userImage: user.userImage,
  };
  return currentUser;
}

async function updateUserForm(updateUser: EditUser) {
  await dataService.editUser(updateUser);
}

async function getSpecyficUser(): Promise<User> {
  const user = await dataService.getCurrentUser();
  return detailsOfTheCurrentUser(user?.data);
}

// eslint-disable-next-line
async function postLoginUserForm(registeredUser: UserLogin) {
  // eslint-disable-next-line
  const response = await dataService.postLoginUser(registeredUser);

  return response.data;
}

export {
  loginRegisteredUserForm,
  postLoginUserForm,
  editUserForm,
  updateUserForm,
  getSpecyficUser,
  detailsOfTheCurrentUser,
};
