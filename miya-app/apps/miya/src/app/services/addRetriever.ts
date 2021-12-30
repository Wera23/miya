import { Retriever } from '@miya-app/shared-types';
import { NewRetrieverValues } from '../components/AddRetriever/AddRetrieverForm/FormInitialValues';
import { dataService } from './data.service';

function addNewRetrieverForm(values: NewRetrieverValues): Retriever {
  const newRetriever: Retriever = {
    id: values.idId,
    name: values.nameId,
    age: values.ageId,
    city: values.cityId,
    voivodeship: values.voivodeshipId,
    gender: values.genderId,
    owner: values.ownerId,
    description: values.descriptionId,
    lat: values.latId,
    long: values.longId,
    instagram: values.instagramId,
    facebook: values.facebookId,
  };
  return newRetriever;
}

// eslint-disable-next-line
async function postNewRetrieverForm(newRetriever: Retriever) {
  // eslint-disable-next-line
  await dataService.postNewRetriever(newRetriever);
}

export { postNewRetrieverForm, addNewRetrieverForm };
