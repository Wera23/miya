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
    name: 'Województwo',
    value: 'voivodeship',
  },
  {
    name: 'Miasto',
    value: 'city',
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
    name: 'Województwo',
    value: 'userVoivodeship',
  },
  {
    name: 'Miasto',
    value: 'userCity',
  },
  {
    name: 'Data moich urodzin',
    value: 'dateOfBirth',
  }, 
];
