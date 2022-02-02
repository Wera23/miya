import { EditUser, User } from '@miya-app/shared-types';
import { EditUserValues } from '../components/Users/EditUser/EditUserForm/FormEditValues';
import { RegisterValues } from '../components/Users/Register/RegisterInitialValues';
import { dataService } from './data.service';

function addNewUserForm(values: RegisterValues): User {
  const newUser: User = {
    userId: values.userId,
    username: values.usernameId,
    userPassword: values.userPasswordId,
    dateOfBirth: values.dateOfBirthId,
    userDescription: values.userDescriptionId,
    userAddress: values.userAddressId,
    userImage: values.userImageId,
  };
  return newUser;
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
async function postNewUserForm(newUser: User) {
  // eslint-disable-next-line
  const response = await dataService.postNewUser(newUser);

  return response.data;
}

export {
  postNewUserForm,
  addNewUserForm,
  editUserForm,
  updateUserForm,
  getSpecyficUser,
  detailsOfTheCurrentUser,
};
