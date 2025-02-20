"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryConfig = void 0;
const dotenv_1 = require("dotenv");
const cloudinary_1 = __importDefault(require("cloudinary"));
(0, dotenv_1.configDotenv)();
const { API_KEY_CLOUDINARY: cloudinary_api_key, API_SECRET_CLOUDINARY: cloudinary_api_secret, CLOUD_NAME_CLOUDINARY: cloudinary_cloud_name, } = process.env;
exports.cloudinaryConfig = cloudinary_1.default.v2.config({
    cloud_name: cloudinary_cloud_name,
    api_key: cloudinary_api_key,
    api_secret: cloudinary_api_secret,
});
