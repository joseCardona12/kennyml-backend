"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryController = exports.ShoppingController = exports.Verification_codeController = exports.TaskController = void 0;
const task_controller_1 = __importDefault(require("./task.controller"));
exports.TaskController = task_controller_1.default;
const verification_code_controller_1 = __importDefault(require("./verification_code.controller"));
exports.Verification_codeController = verification_code_controller_1.default;
const shopping_controller_1 = __importDefault(require("./shopping.controller"));
exports.ShoppingController = shopping_controller_1.default;
const cloudinary_controller_1 = __importDefault(require("./cloudinary.controller"));
exports.CloudinaryController = cloudinary_controller_1.default;
