"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const place_controller_1 = __importDefault(require("../../controllers/place.controller"));
const placeRouter = (0, express_1.Router)();
placeRouter.get("/", place_controller_1.default.getAllPlaces);
exports.default = placeRouter;
