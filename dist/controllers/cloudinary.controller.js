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
const cloudinary_service_1 = __importDefault(require("../services/cloudinary.service"));
class CloudinaryController {
    static createCloudinary(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.body;
            console.log("file", file);
            if (!file) {
                res.status(400).json({
                    message: "Is required file",
                    statusCode: 400,
                });
                return;
            }
            const cloudinaryService = tsyringe_1.container.resolve(cloudinary_service_1.default);
            try {
                const cloudinaryCreate = yield cloudinaryService.createCloudinary(file);
                res.status(201).json({
                    message: "Cloudinary created success",
                    statusCode: 201,
                    data: cloudinaryCreate,
                });
            }
            catch (error) {
                res.status(500).json({
                    message: `Error internal server ${error}`,
                    statusCode: 500,
                });
            }
        });
    }
}
exports.default = CloudinaryController;
