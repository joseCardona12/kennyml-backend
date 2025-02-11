"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
const services_1 = require("../services");
const auth_service_1 = __importDefault(require("../services/auth.service"));
const twilio_service_1 = __importDefault(require("../services/twilio.service"));
tsyringe_1.container.registerSingleton(models_1.TaskModel);
tsyringe_1.container.registerSingleton(services_1.TaskService);
tsyringe_1.container.registerSingleton(models_1.UserModel);
tsyringe_1.container.registerSingleton(auth_service_1.default);
tsyringe_1.container.registerSingleton(twilio_service_1.default);
