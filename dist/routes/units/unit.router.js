"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unit_controller_1 = __importDefault(require("../../controllers/unit.controller"));
const unitRouter = (0, express_1.Router)();
unitRouter.get("/", unit_controller_1.default.getAllUnits);
exports.default = unitRouter;
