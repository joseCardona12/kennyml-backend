import { Router } from "express";
import { ShoppingController } from "../../controllers";

const shoppingRouter: Router = Router();
shoppingRouter.get("/", ShoppingController.getAllShoppings);
shoppingRouter.post("/", ShoppingController.createShopping);

export default shoppingRouter;
