"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification_codeService = exports.TaskService = void 0;
const task_service_1 = __importDefault(require("./task.service"));
exports.TaskService = task_service_1.default;
const verification_code_service_1 = __importDefault(require("./verification_code.service"));
exports.Verification_codeService = verification_code_service_1.default;
