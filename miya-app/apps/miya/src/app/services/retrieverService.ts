import { EditRetriever, Retriever } from '@miya-app/shared-types';
import { NewRetrieverValues } from '../components/Retrievers/AddRetriever/AddRetrieverForm/FormInitialValues';
import { EditRetrieverValues } from '../components/Retrievers/EditRetriever/EditRetrieverForm/FormEditValues';
import { dataService } from './data.service';

function retrieverForm(values: NewRetrieverValues): Retriever {
  const newRetriever: Retriever = {
    name: values.nameId,
    age: values.ageId,
    city: values.cityId,
    voivodeship: values.voivodeshipId,
    gender: values.genderId,
    owner: values.ownerId,
    description: values.descriptionId,
    instagram: values.instagramId,
    facebook: values.facebookId,
    image: values.imageId,
  };
  return newRetriever;
}

function edtiRetrieverForm(values: EditRetrieverValues): EditRetriever {
  const updateRetriever: EditRetriever = {
    name: values?.nameId,
    age: values?.ageId,
    city: values?.cityId,
    voivodeship: values?.voivodeshipId,
    description: values?.descriptionId,
    instagram: values?.instagramId,
    facebook: values?.facebookId,
    image: values?.imageId,
  };
  return updateRetriever;
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
    instagram: retriever.instagram,
    facebook: retriever.facebook,
    image: retriever.image,
  };
  return specificRetriever;
}

function mapAllRetrievers(allRetrievers: Retriever[]): Retriever[] {
  const retrievers: Retriever[] = allRetrievers.map((retriever: Retriever) => ({
    id: retriever.id,
    name: retriever.name,
    age: retriever.age,
    city: retriever.city,
    voivodeship: retriever.voivodeship,
    gender: retriever.gender,
    owner: retriever.owner,
    description: retriever.description,
    instagram: retriever.instagram,
    facebook: retriever.facebook,
    image: retriever.image,
  }));
  return retrievers;
}

async function postNewRetrieverForm(newRetriever: Retriever) {
  const retriever = await dataService.postNewRetriever(newRetriever);
  return retriever?.data.id;
}

async function deleteSpecificRetriever(id: number) {
  await dataService.deleteSpecificRetriever(id);
}

async function editSpecificRetrieverForm(
  id: number,
  updateRetriever: EditRetriever
) {
  await dataService.editSpecificRetriever(id, updateRetriever);
}

async function getSpecyficSingleRetriever(id: number): Promise<Retriever> {
  const retiever = await dataService.getSpecificRetriever(id);
  return detailsOfTheSpecificRetriever(retiever?.data);
}

async function getAllRetrievers() {
  const retrievers = await dataService.getRetrievers();
  return mapAllRetrievers(retrievers.data);
}

export {
  postNewRetrieverForm,
  retrieverForm,
  getSpecyficSingleRetriever,
  editSpecificRetrieverForm,
  detailsOfTheSpecificRetriever,
  edtiRetrieverForm,
  deleteSpecificRetriever,
  getAllRetrievers,
};
