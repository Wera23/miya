"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieversService = void 0;
const common_1 = require("@nestjs/common");
let RetrieversService = class RetrieversService {
    constructor() {
        this.retrievers = {
            1: {
                id: 1,
                name: 'Miya',
                gender: 'Female',
                age: '6 miesięcy',
                city: 'Katowice',
                description: '',
                location: {
                    lat: 50.26,
                    long: 19.02,
                },
                owner: '',
                voivodeship: 'Silesia',
            },
        };
    }
    findAllRetrievers() {
        return this.retrievers;
    }
    createRetriever(newRetriever) {
        const id = Date.now();
        this.retrievers[id] = Object.assign(Object.assign({}, newRetriever), { id });
    }
    findRetriever(id) {
        const retriever = this.retrievers[id];
        if (!retriever)
            throw new Error('No retrievers found.');
        return retriever;
    }
    updateRetriever(retriever) {
        if (!this.retrievers[retriever.id])
            throw new Error('No retriever found');
        this.retrievers[retriever.id] = retriever;
    }
    deleteRetriever(id) {
        const retriever = this.retrievers[id];
        if (!retriever)
            throw new Error('No retriever found');
        delete this.retrievers[id];
    }
};
RetrieversService = __decorate([
    (0, common_1.Injectable)()
], RetrieversService);
exports.RetrieversService = RetrieversService;
//# sourceMappingURL=retrievers.service.js.map