import { Retriever } from '@miya-app/shared-types';
import { tempRetrievers } from './tempRetrievers';

const getAllTempRetrievers = () => fakeDataPromise<Retriever[]>(tempRetrievers);

function fakeDataPromise<D>(data: D): Promise<D> {
  const dataPromise = new Promise<D>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 100) === 0;
      return error ? reject('Error') : resolve(data);
    }, 500);
  });

  return dataPromise;
}

export { getAllTempRetrievers };
