"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieversController = void 0;
const common_1 = require("@nestjs/common");
const retriever_1 = require("../retriever");
const retrievers_service_1 = require("./retrievers.service");
let RetrieversController = class RetrieversController {
    constructor(retrieversService) {
        this.retrieversService = retrieversService;
    }
    async findAllRetrievers() {
        return this.retrieversService.findAllRetrievers();
    }
    async findRetriever(id) {
        return this.retrieversService.findRetriever(id);
    }
    createRetriever(retriever) {
        this.retrieversService.createRetriever(retriever);
    }
    updateRetriever(retriever) {
        this.retrieversService.updateRetriever(retriever);
    }
    deleteRetriever(id) {
        this.retrieversService.deleteRetriever(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RetrieversController.prototype, "findAllRetrievers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RetrieversController.prototype, "findRetriever", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [retriever_1.Retriever]),
    __metadata("design:returntype", void 0)
], RetrieversController.prototype, "createRetriever", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [retriever_1.Retriever]),
    __metadata("design:returntype", void 0)
], RetrieversController.prototype, "updateRetriever", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RetrieversController.prototype, "deleteRetriever", null);
RetrieversController = __decorate([
    (0, common_1.Controller)('retrievers'),
    __metadata("design:paramtypes", [retrievers_service_1.RetrieversService])
], RetrieversController);
exports.RetrieversController = RetrieversController;
//# sourceMappingURL=retrievers.controller.js.map