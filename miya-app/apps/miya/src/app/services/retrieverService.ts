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

function detailsOfTheSpecificRetriever(retriever: Retriever): Retriever {
  const specificRetriever: Retriever = {
    id: retriever.id,
    name: retriever.name,
    age: retriever.age,
    city: retriever.city,
    voivodeship: retriever.voivodeship,
    gender: retriever.gender,
    owner: retriever.owner,
    description: retriever.description,
    lat: retriever.lat,
    long: retriever.long,
    instagram: retriever.instagram,
    facebook: retriever.facebook,
  };
  return specificRetriever;
}

// eslint-disable-next-line
async function postNewRetrieverForm(newRetriever: Retriever) {
  // eslint-disable-next-line
  await dataService.postNewRetriever(newRetriever);
}

async function getSpecyficSingleRetriever(id: string): Promise<Retriever> {
  const retiever = await dataService.getSpecificRetriever(id);
  return detailsOfTheSpecificRetriever(retiever?.data);
}

export {
  postNewRetrieverForm,
  addNewRetrieverForm,
  getSpecyficSingleRetriever,
};
