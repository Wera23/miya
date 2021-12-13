import { Retriever } from '../retriever';
import { Retrievers } from '../retrievers';
import { RetrieversService } from './retrievers.service';
export declare class RetrieversController {
    private readonly retrieversService;
    constructor(retrieversService: RetrieversService);
    findAllRetrievers(): Promise<Retrievers>;
    findRetriever(id: number): Promise<Retriever>;
    createRetriever(retriever: Retriever): void;
    updateRetriever(retriever: Retriever): void;
    deleteRetriever(id: number): void;
}
