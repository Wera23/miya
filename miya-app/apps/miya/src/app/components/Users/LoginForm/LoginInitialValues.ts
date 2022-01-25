export interface LoginValues {
  usernameId: string;
  userPasswordId: string;
}

export const initialValues: LoginValues = {
  usernameId: '',
  userPasswordId: '',
};

export enum LoginFormTypes {
  username = 'usernameId',
  userPassword = 'userPasswordId',
}
