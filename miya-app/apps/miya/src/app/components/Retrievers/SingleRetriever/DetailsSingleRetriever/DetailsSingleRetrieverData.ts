export interface DetailsRetrieverTypes {
  name: string;
  value: string;
  icon?: string;
}

export const detailsSingleRetrieverData: DetailsRetrieverTypes[] = [
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
    name: 'Charakter psa',
    value: 'description',
  },
  {
    name: 'Właściciel',
    value: 'owner',
  },
];

// export const socialMediaRetriever: DetailsRetrieverTypes[] = [
//   { name: 'Instagram', value: 'instagram', icon: 'instagram' },
//   { name: 'Facebook', value: 'facebook', icon: 'facebook-circled' },
// ];
