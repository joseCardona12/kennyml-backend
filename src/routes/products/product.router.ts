import { Router } from "express";
import ProductController from "../../controllers/product.controller";

const productRouter: Router = Router();
productRouter.get("/", ProductController.getAllProducts);
productRouter.post("/", ProductController.createProduct);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);
export default productRouter;
