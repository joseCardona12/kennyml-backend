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
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const services_1 = require("../services");
class Verification_codeController {
    static createCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code } = req.body;
            if (!code) {
                res.status(400).json({
                    message: "Error. Is required code",
                    statusCode: 400,
                });
                return;
            }
            console.log("code", code);
            const verification_codeService = tsyringe_1.container.resolve(services_1.Verification_codeService);
            try {
                yield verification_codeService.createCode({
                    code,
                });
                res.status(201).json({
                    message: "Code created success",
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
    static getAllCode(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const verification_codeService = tsyringe_1.container.resolve(services_1.Verification_codeService);
            try {
                const codes = yield verification_codeService.getCodes();
                res.status(200).json({
                    message: "Get all code correctly",
                    codes,
                    statusCode: 200,
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
exports.default = Verification_codeController;
