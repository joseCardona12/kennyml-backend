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
exports.UtilApplication = void 0;
const config_1 = require("../config");
const loadEnv_1 = require("../config/loadEnv");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UtilApplication {
    static consoleMessage(message) {
        console.log({
            message,
        });
    }
    static returnMessage(nameMethod, nameModule) {
        return {
            message: `Error with the method ${nameMethod} on the model ${nameModule}`,
        };
    }
    static initServer(app) {
        return __awaiter(this, void 0, void 0, function* () {
            yield config_1.sequelize.authenticate();
            this.consoleMessage("Trying connect with database");
            yield config_1.sequelize.sync();
            this.consoleMessage("Synchronizing database");
            app.listen(loadEnv_1.port, () => this.consoleMessage(`Server running on the port ${loadEnv_1.port}`));
        });
    }
    static verifyExistsParam(...values) {
        return values.every((value) => value);
    }
    static encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(password, salt);
            return hashedPassword;
        });
    }
    static verifyPassword(password, passwordSave) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt_1.default.compare(password, passwordSave);
        });
    }
    static generateNumberRandom() {
        return Math.floor(Math.random() * 101);
    }
}
exports.UtilApplication = UtilApplication;
