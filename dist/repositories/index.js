"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verification_codeRepository = exports.TaskRepository = void 0;
const task_repository_1 = __importDefault(require("./task.repository"));
exports.TaskRepository = task_repository_1.default;
const verification_code_repository_1 = __importDefault(require("./verification_code.repository"));
exports.Verification_codeRepository = verification_code_repository_1.default;
