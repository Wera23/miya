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
    userVoivodeship: values?.userVoivodeshipId,
    userCity: values?.userCityId,
    userImage: values?.userImageId,
    userGender: values?.userGenderId,

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
    userVoivodeship: user.userVoivodeship,
    userCity: user.userCity,
    userImage: user.userImage,
    userGender: user.userGender,
  };
  return currentUser;
}

async function updateUserForm(updateUser: EditUser) {
  await dataService.editUser(updateUser);
}

async function getSpecyficUser(name: string): Promise<User> {
  const user = await dataService.getSpecificUser(name);
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
