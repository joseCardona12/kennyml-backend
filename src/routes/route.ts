import { Router } from "express";
import routerTask from "./tasks/route.task";
import { authRouter } from "./auth/auth.router";
import { twilioRouter } from "./twilio/twilio.route";
import { verification_codeRouter } from "./verification_code/verification_code.route";
import productRouter from "./products/product.router";
import unitRouter from "./units/unit.router";
import placeRouter from "./places/place.router";
import statusRouter from "./status/status.router";
import shoppingRouter from "./shopping/shopping.router";
import cloudinaryRouter from "./cloudinary/cloudinary.router";

const router: Router = Router();
router.use("/auth", authRouter);
router.use("/tasks", routerTask);
router.use("/sms", twilioRouter);
router.use("/codes", verification_codeRouter);
router.use("/products", productRouter);
router.use("/units", unitRouter);
router.use("/places", placeRouter);
router.use("/status", statusRouter);
router.use("/shoppings", shoppingRouter);
router.use("/cloudinary", cloudinaryRouter);

export default router;
