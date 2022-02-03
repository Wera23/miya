export interface SelectOptions {
  value: string;
  label: string;
}
export enum VoivodeshipsDataTypes {
  dolnoslaskie = 'Dolno-śląskie',
  kujawskoPomorskie = 'Kujawsko-Pomorskie',
  lubelskie = 'Lubelskie',
  lubuskie = 'Lubuskie',
  lodzkie = 'Łódzkie',
  malopolskie = 'Małopolskie',
  mazowieckie = 'Mazowieckie',
  opolskie = 'Opolskie',
  podkarpackie = 'Podkarpackie',
  podlaskie = 'Podlaskie',
  pomorskie = 'Pomorskie',
  slaskie = 'Śląskie',
  swietokrzyskie = 'Świętokrzystkie',
  warminskoMazurkie = 'Warmińsko-Mazurskie',
  wielkopolskie = 'Wielkopolskie',
  zachodniopomorskie = 'Zachodniopomorskie',
}

export const voivodeshipsData: SelectOptions[] = [
  { value: VoivodeshipsDataTypes.dolnoslaskie, label: 'Dolno-śląskie' },
  {
    value: VoivodeshipsDataTypes.kujawskoPomorskie,
    label: 'Kujawsko-Pomorskie',
  },
  { value: VoivodeshipsDataTypes.lubelskie, label: 'Lubelskie' },
  { value: VoivodeshipsDataTypes.lubuskie, label: 'Lubuskie' },
  { value: VoivodeshipsDataTypes.lodzkie, label: 'Łódzkie' },
  { value: VoivodeshipsDataTypes.malopolskie, label: 'Małopolskie' },
  { value: VoivodeshipsDataTypes.mazowieckie, label: 'Mazowieckie' },
  { value: VoivodeshipsDataTypes.opolskie, label: 'Opolskie' },
  { value: VoivodeshipsDataTypes.podkarpackie, label: 'Podkarpackie' },
  { value: VoivodeshipsDataTypes.podlaskie, label: 'Podlaskie' },
  { value: VoivodeshipsDataTypes.pomorskie, label: 'Pomorskie' },
  { value: VoivodeshipsDataTypes.slaskie, label: 'Śląskie' },
  { value: VoivodeshipsDataTypes.swietokrzyskie, label: 'Świętokrzystkie' },
  {
    value: VoivodeshipsDataTypes.warminskoMazurkie,
    label: 'Warmińsko-Mazurskie',
  },
  { value: VoivodeshipsDataTypes.wielkopolskie, label: 'Wielkopolskie' },
  {
    value: VoivodeshipsDataTypes.zachodniopomorskie,
    label: 'Zachodniopomorskie',
  },
];

export const genderData: SelectOptions[] = [
  {
    value: 'Suczka',
    label: 'Suczka',
  },
  {
    value: 'Piesek',
    label: 'Piesek',
  },
];


export const genderUserData: SelectOptions[] = [
  {
    value: 'Kobieta',
    label: 'Kobieta',
  },
  {
    value: 'Mężczyzna',
    label: 'Mężczyzna',
  },
];
