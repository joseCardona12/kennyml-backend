"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const loadEnv_1 = require("./loadEnv");
const models_1 = require("../models");
const product_model_1 = __importDefault(require("../models/product.model"));
const place_model_1 = __importDefault(require("../models/place.model"));
const unit_model_1 = __importDefault(require("../models/unit.model"));
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: loadEnv_1.host_db,
    port: parseInt(loadEnv_1.port_db),
    username: loadEnv_1.user_db,
    password: loadEnv_1.password_db,
    database: loadEnv_1.name_db,
    models: [
        models_1.TaskModel,
        models_1.StatusModel,
        models_1.LevelModel,
        models_1.RoleModel,
        models_1.TypeDocumentModel,
        models_1.UserModel,
        models_1.VerificacionCodeModel,
        models_1.CityModel,
        product_model_1.default,
        place_model_1.default,
        unit_model_1.default,
        models_1.ShoppingModel,
    ],
});
