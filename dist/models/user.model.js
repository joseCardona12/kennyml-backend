"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const type_document_model_1 = __importDefault(require("./type_document.model"));
const role_model_1 = __importDefault(require("./role.model"));
const level_model_1 = __importDefault(require("./level.model"));
const city_model_1 = __importDefault(require("./city.model"));
const verification_code_model_1 = __importDefault(require("./verification_code.model"));
const product_model_1 = __importDefault(require("./product.model"));
let UserModel = class UserModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], UserModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], UserModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT(),
        allowNull: false,
    })
], UserModel.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], UserModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], UserModel.prototype, "cellphone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], UserModel.prototype, "document_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], UserModel.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    })
], UserModel.prototype, "about_me", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    })
], UserModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    })
], UserModel.prototype, "url_image", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => type_document_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], UserModel.prototype, "type_document_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => role_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], UserModel.prototype, "role_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => level_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], UserModel.prototype, "level_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => city_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], UserModel.prototype, "city_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => verification_code_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], UserModel.prototype, "code_verification_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_model_1.default)
], UserModel.prototype, "products", void 0);
UserModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "users",
        timestamps: false,
    })
], UserModel);
exports.default = UserModel;
