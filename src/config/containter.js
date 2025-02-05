"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const models_1 = require("../models");
const services_1 = require("../services");
tsyringe_1.container.registerSingleton(models_1.TaskModel);
tsyringe_1.container.registerSingleton(services_1.TaskService);
