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
const auth_service_1 = __importDefault(require("../services/auth.service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loadEnv_1 = require("../config/loadEnv");
class AuthController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(email, password);
            if (!existsParamVerify) {
                res.status(400).json({
                    message: "Is required all params",
                    statusCode: 400,
                });
                return;
            }
            const authService = tsyringe_1.container.resolve(auth_service_1.default);
            try {
                const authUserCreate = yield authService.login({
                    email,
                    password,
                });
                console.log("auht", authUserCreate);
                if (!authUserCreate) {
                    res.status(404).json({
                        message: "Error, user not found",
                        statusCode: 404,
                    });
                    return;
                }
                console.log("before token");
                const tokenGenerate = AuthController.generateToken({ email, password });
                console.log("after token");
                if (!tokenGenerate) {
                    res.status(400).json({
                        messgage: "Error to create token",
                        statusCode: 400,
                    });
                    return;
                }
                res.status(200).json({
                    message: "User Found. Login success",
                    statusCode: 200,
                    token: tokenGenerate,
                    user: authUserCreate,
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
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, email, cellphone, password, codeConnection } = req.body;
            const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(name, lastName, email, cellphone, password, codeConnection);
            if (!existsParamVerify) {
                res.status(400).json({
                    message: "Error. Is required all params",
                    statusCode: 400,
                });
                return;
            }
            const authService = tsyringe_1.container.resolve(auth_service_1.default);
            try {
                const authUserCreate = yield authService.register({
                    name,
                    lastName,
                    email,
                    cellphone,
                    password,
                }, codeConnection);
                if (!authUserCreate) {
                    res.status(400).json({
                        message: "Error to register user",
                        statusCode: 400,
                    });
                    return;
                }
                const tokenGenerate = AuthController.generateToken({
                    name,
                    lastName,
                    email,
                    cellphone,
                    password,
                });
                if (!tokenGenerate) {
                    res.status(400).json({
                        message: "Error to generate token",
                        statusCode: 400,
                    });
                    return;
                }
                res.status(201).json({
                    message: "User created correctly",
                    statusCode: 201,
                    token: tokenGenerate,
                    user: authUserCreate,
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
    static generateToken(user) {
        console.log("Error", user);
        return jsonwebtoken_1.default.sign(user, loadEnv_1.secret, { expiresIn: "1h" });
    }
}
exports.default = AuthController;
