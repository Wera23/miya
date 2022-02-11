import { User } from '../models/models';
import { dataService } from './data.service';

function mapAllUsers(allUsers: User[]): User[] {
  const users: User[] = allUsers.map((user: User) => ({
    username: user.username,
    dateOfBirth: user.dateOfBirth,
    userDescription: user.userDescription,
    userCity: user.userCity,
    userVoivodeship: user.userVoivodeship,
    userGender: user.userGender,
    userImage: user.userImage,
    userGreet: user.userGreet,
    isActive: user.isActive,
  }));
  return users;
}

async function getAllUsers() {
  const users = await dataService.getUsers();
  return mapAllUsers(users.data);
}

export { getAllUsers };
