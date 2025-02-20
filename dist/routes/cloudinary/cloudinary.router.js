"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const cloudinaryRouter = (0, express_1.Router)();
cloudinaryRouter.post("/", controllers_1.CloudinaryController.createCloudinary);
exports.default = cloudinaryRouter;
