"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const models_1 = require("../models");
let AuthRepository = class AuthRepository {
    register(authUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.UserModel.create(authUser);
            }
            catch (error) {
                throw new Error("Error to login user");
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.UserModel.findOne({
                    where: {
                        email,
                        password,
                    },
                });
            }
            catch (error) {
                throw new Error("Error to search user by email and password");
            }
        });
    }
    getByCellphone(cellphone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.UserModel.findOne({
                    where: { cellphone },
                });
            }
            catch (error) {
                throw new Error("Error to search user by cellphone");
            }
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.UserModel.findOne({
                    where: { email },
                });
            }
            catch (error) {
                throw new Error("Error to search user by email");
            }
        });
    }
};
AuthRepository = __decorate([
    (0, tsyringe_1.injectable)()
], AuthRepository);
exports.default = AuthRepository;
