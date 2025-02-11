"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioRouter = void 0;
const express_1 = require("express");
const twilio_controller_1 = __importDefault(require("../../controllers/twilio.controller"));
exports.twilioRouter = (0, express_1.Router)();
exports.twilioRouter.post("/", twilio_controller_1.default.sendVerificationTwilio);
