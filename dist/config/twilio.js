"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioClient = void 0;
const dotenv_1 = require("dotenv");
const twilio_1 = __importDefault(require("twilio"));
(0, dotenv_1.configDotenv)();
const { ACCOUNT_SID: account_sid, AUTH_TOKEN: auth_token, } = process.env;
exports.twilioClient = (0, twilio_1.default)(account_sid, auth_token);
