"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const repositories_1 = require("../repositories");
let Verification_codeService = class Verification_codeService {
    constructor(verification_codeRepository) {
        this.verification_codeRepository = verification_codeRepository;
    }
    createCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.verification_codeRepository.createCode(code);
                console.log("data", data);
                return data;
            }
            catch (error) {
                console.log({
                    message: `${error}`,
                });
                throw Error(`${error}`);
            }
        });
    }
    getCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.verification_codeRepository.getCodes();
            }
            catch (error) {
                throw Error(`${error}`);
            }
        });
    }
};
Verification_codeService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(repositories_1.Verification_codeRepository))
], Verification_codeService);
exports.default = Verification_codeService;
