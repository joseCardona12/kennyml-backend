"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verification_codeRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
exports.verification_codeRouter = (0, express_1.Router)();
exports.verification_codeRouter.get("/", controllers_1.Verification_codeController.getAllCode);
exports.verification_codeRouter.post("/", controllers_1.Verification_codeController.createCode);
