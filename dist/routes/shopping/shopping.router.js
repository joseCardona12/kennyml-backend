"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const shoppingRouter = (0, express_1.Router)();
shoppingRouter.get("/", controllers_1.ShoppingController.getAllShoppings);
shoppingRouter.post("/", controllers_1.ShoppingController.createShopping);
exports.default = shoppingRouter;
