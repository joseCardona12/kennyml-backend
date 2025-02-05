"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const loadEnv_1 = require("./loadEnv");
const models_1 = require("../models");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: loadEnv_1.host_db,
    port: parseInt(loadEnv_1.port_db),
    username: loadEnv_1.user_db,
    password: loadEnv_1.password_db,
    database: loadEnv_1.name_db,
    models: [models_1.TaskModel, models_1.StatusModel],
});
