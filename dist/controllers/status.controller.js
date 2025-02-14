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
const status_service_1 = __importDefault(require("../services/status.service"));
class StatusController {
    static getAllStatus(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusService = tsyringe_1.container.resolve(status_service_1.default);
            try {
                const status = yield statusService.getAllStatus();
                res.status(200).json({
                    message: "Get all status success",
                    statusCode: 200,
                    data: status,
                });
            }
            catch (error) {
                res.status(500).json({
                    message: `Error internal server ${error}`,
                });
            }
        });
    }
}
exports.default = StatusController;
