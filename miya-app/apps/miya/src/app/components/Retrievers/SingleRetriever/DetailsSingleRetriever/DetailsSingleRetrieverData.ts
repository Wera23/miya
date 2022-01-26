export interface DetailsRetrieverTypes {
  name: string;
  value: string;
  icon?: string;
}

export const detailsSingleRetrieverData: DetailsRetrieverTypes[] = [
  {
    name: 'Imię psa',
    value: 'name',
  },
  {
    name: 'Wiek',
    value: 'age',
  },
  {
    name: 'Płeć',
    value: 'gender',
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
    name: 'Właściciel',
    value: 'owner',
  },
  {
    name: 'Charakter psa',
    value: 'description',
  },
];

export const socialMediaRetriever: DetailsRetrieverTypes[] = [
  { name: 'Instagram', value: 'instagram', icon: 'instagram' },
  { name: 'Facebook', value: 'facebook', icon: 'facebook-circled' },
];
