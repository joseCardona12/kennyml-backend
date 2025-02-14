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
const utils_1 = require("../utils");
const tsyringe_1 = require("tsyringe");
const product_service_1 = __importDefault(require("../services/product.service"));
class ProductController {
    static getAllProducts(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productService = tsyringe_1.container.resolve(product_service_1.default);
            try {
                const products = yield productService.getAllProducts();
                res.status(200).json({
                    message: "Get all products sucess",
                    statusCode: 200,
                    data: products,
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
    static createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, quantity, start_date, end_date, status_id, unit_id, place_id, user_id, } = req.body;
            const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(title, description, quantity, start_date, end_date, status_id, unit_id, place_id, user_id);
            if (!existsParamVerify) {
                res.status(400).json({
                    message: "Error. Is required all params",
                    statusCode: 400,
                });
                return;
            }
            const productService = tsyringe_1.container.resolve(product_service_1.default);
            try {
                const product = yield productService.createProduct({
                    title,
                    description,
                    quantity,
                    start_date,
                    end_date,
                    status_id,
                    unit_id,
                    place_id,
                    user_id,
                });
                res.status(200).json({
                    message: "Product created success",
                    statusCode: 200,
                    data: product,
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
    static updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description, quantity, start_date, end_date, status_id, unit_id, place_id, user_id, } = req.body;
            if (!id) {
                res.status(400).json({
                    message: "Is required id product",
                    statusCode: 400,
                });
                return;
            }
            const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(title, description, quantity, start_date, end_date, status_id, unit_id, place_id, user_id);
            if (!existsParamVerify) {
                res.status(400).json({
                    message: "Is required all params",
                    statusCode: 400,
                });
                return;
            }
            const productService = tsyringe_1.container.resolve(product_service_1.default);
            try {
                const product = yield productService.updateProduct({
                    title,
                    description,
                    quantity,
                    start_date,
                    end_date,
                    status_id,
                    unit_id,
                    place_id,
                    user_id,
                }, parseInt(id));
                res.status(200).json({
                    message: "Product updated success",
                    statusCode: 200,
                    data: product,
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
    static deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id) {
                res.status(400).json({
                    message: "Error. Is required id product",
                    statusCode: 400,
                });
                return;
            }
            const productService = tsyringe_1.container.resolve(product_service_1.default);
            try {
                yield productService.deleteProduct(parseInt(id));
            }
            catch (error) {
                res.status(500).json({
                    message: `Error internal server  ${error}`,
                    statusCode: 500,
                });
            }
        });
    }
}
exports.default = ProductController;
