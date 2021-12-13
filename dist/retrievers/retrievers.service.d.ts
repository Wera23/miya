import { Retriever } from '../retriever';
import { Retrievers } from '../retrievers';
export declare class RetrieversService {
    private readonly retrievers;
    findAllRetrievers(): Retrievers;
    createRetriever(newRetriever: Retriever): void;
    findRetriever(id: number): Retriever;
    updateRetriever(retriever: Retriever): void;
    deleteRetriever(id: number): void;
}
