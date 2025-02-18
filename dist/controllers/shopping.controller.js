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
const shopping_service_1 = __importDefault(require("../services/shopping.service"));
const utils_1 = require("../utils");
class ShoppingController {
    static getAllShoppings(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shoppingService = tsyringe_1.container.resolve(shopping_service_1.default);
            try {
                const shoppings = yield shoppingService.getAllShoppings();
                res.status(200).json({
                    message: "Get all shoppings success",
                    statusCode: 200,
                    data: shoppings,
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
    static createShopping(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url_image, price, product_id } = req.body;
            const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(url_image, price, product_id);
            if (!existsParamVerify) {
                res.status(400).json({
                    message: "Error. Is required all params",
                    statusCode: 400,
                });
                return;
            }
            const shoppingService = tsyringe_1.container.resolve(shopping_service_1.default);
            try {
                const shopping = yield shoppingService.createShopping({
                    url_image,
                    price,
                    product_id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
                res.status(201).json({
                    message: "Shopping creted success",
                    statusCode: 201,
                    data: shopping,
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
exports.default = ShoppingController;
