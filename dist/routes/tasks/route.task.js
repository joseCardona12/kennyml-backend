"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const routerTask = (0, express_1.Router)();
routerTask.get("/", controllers_1.TaskController.getTasks);
routerTask.post("/", controllers_1.TaskController.createTask);
exports.default = routerTask;
