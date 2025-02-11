"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const twilio_service_1 = __importDefault(require("../services/twilio.service"));
class TwilioController {
    static sendVerificationTwilio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { phone_number, code } = req.body;
            if (!phone_number) {
                res.status(400).json({
                    message: "Error. Is required phoneNumber",
                    statusCode: 400,
                });
                return;
            }
            const twilioService = tsyringe_1.container.resolve(twilio_service_1.default);
            try {
                const response = yield twilioService.sendVerificationCode(phone_number, code);
                console.log("res", response);
                res.status(201).json({
                    message: "Message sent correctly",
                    statusCode: 201,
                });
            }
            catch (error) {
                res.status(500).json({
                    message: `${error}`,
                    statusCode: 500,
                });
            }
        });
    }
}
exports.default = TwilioController;
