export interface ProfileTypes {
  name: string;
  value: string;
}

export const retrieverProfile: ProfileTypes[] = [
  {
    name: 'Imię',
    value: 'name',
  },
  {
    name: 'Wiek',
    value: 'age',
  },
  {
    name: 'Miasto',
    value: 'city',
  },
  {
    name: 'Województwo',
    value: 'voivodeship',
  },
  {
    name: 'Krótki opis',
    value: 'description',
  },
  {
    name: 'Instagram',
    value: 'instagram',
  },
];

export const userProfile: ProfileTypes[] = [
  {
    name: 'O mnie',
    value: 'userDescription',
  },
  {
    name: 'Moje miasto',
    value: 'userAddress',
  },
  {
    name: 'Data moich urodzin',
    value: 'dateOfBirth',
  },
  {
    name: 'Mój pies',
    value: 'username',
  },
];
