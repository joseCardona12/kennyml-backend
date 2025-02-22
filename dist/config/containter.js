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
const product_model_1 = __importDefault(require("../models/product.model"));
const product_service_1 = __importDefault(require("../services/product.service"));
const place_model_1 = __importDefault(require("../models/place.model"));
const place_service_1 = __importDefault(require("../services/place.service"));
const unit_model_1 = __importDefault(require("../models/unit.model"));
const unit_service_1 = __importDefault(require("../services/unit.service"));
const status_service_1 = __importDefault(require("../services/status.service"));
const repositories_1 = require("../repositories");
const auth_repository_1 = __importDefault(require("../repositories/auth.repository"));
const product_repository_1 = __importDefault(require("../repositories/product.repository"));
const place_repository_1 = __importDefault(require("../repositories/place.repository"));
const unit_repository_1 = __importDefault(require("../repositories/unit.repository"));
const status_repository_1 = __importDefault(require("../repositories/status.repository"));
const cloudinary_service_1 = __importDefault(require("../services/cloudinary.service"));
tsyringe_1.container.registerSingleton(models_1.TaskModel);
tsyringe_1.container.registerSingleton(services_1.TaskService);
tsyringe_1.container.registerSingleton(repositories_1.TaskRepository);
tsyringe_1.container.registerSingleton(models_1.UserModel);
tsyringe_1.container.registerSingleton(auth_service_1.default);
tsyringe_1.container.registerSingleton(auth_repository_1.default);
tsyringe_1.container.registerSingleton(twilio_service_1.default);
tsyringe_1.container.registerSingleton(product_model_1.default);
tsyringe_1.container.registerSingleton(product_service_1.default);
tsyringe_1.container.registerSingleton(product_repository_1.default);
tsyringe_1.container.registerSingleton(place_model_1.default);
tsyringe_1.container.registerSingleton(place_service_1.default);
tsyringe_1.container.registerSingleton(place_repository_1.default);
tsyringe_1.container.registerSingleton(place_service_1.default);
tsyringe_1.container.registerSingleton(unit_model_1.default);
tsyringe_1.container.registerSingleton(unit_service_1.default);
tsyringe_1.container.registerSingleton(unit_repository_1.default);
tsyringe_1.container.registerSingleton(models_1.StatusModel);
tsyringe_1.container.registerSingleton(status_service_1.default);
tsyringe_1.container.registerSingleton(status_repository_1.default);
tsyringe_1.container.registerSingleton(cloudinary_service_1.default);
