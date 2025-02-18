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
const statusModel_1 = __importDefault(require("./statusModel"));
const unit_model_1 = __importDefault(require("./unit.model"));
const place_model_1 = __importDefault(require("./place.model"));
const user_model_1 = __importDefault(require("./user.model"));
const shopping_1 = __importDefault(require("./shopping"));
let ProductModel = class ProductModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    })
], ProductModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], ProductModel.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    })
], ProductModel.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ProductModel.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], ProductModel.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        allowNull: false,
    })
], ProductModel.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => statusModel_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ProductModel.prototype, "status_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => unit_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ProductModel.prototype, "unit_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => place_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ProductModel.prototype, "place_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ProductModel.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => shopping_1.default)
], ProductModel.prototype, "shoppings", void 0);
ProductModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "products",
        timestamps: false,
    })
], ProductModel);
exports.default = ProductModel;
