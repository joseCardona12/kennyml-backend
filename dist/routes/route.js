"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_task_1 = __importDefault(require("./tasks/route.task"));
const auth_router_1 = require("./auth/auth.router");
const twilio_route_1 = require("./twilio/twilio.route");
const verification_code_route_1 = require("./verification_code/verification_code.route");
const router = (0, express_1.Router)();
router.use("/auth", auth_router_1.authRouter);
router.use("/tasks", route_task_1.default);
router.use("/sms", twilio_route_1.twilioRouter);
router.use("/codes", verification_code_route_1.verification_codeRouter);
exports.default = router;
