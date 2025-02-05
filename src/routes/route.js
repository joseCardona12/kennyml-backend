"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_task_1 = __importDefault(require("./tasks/route.task"));
const router = (0, express_1.Router)();
router.use("/tasks", route_task_1.default);
exports.default = router;
