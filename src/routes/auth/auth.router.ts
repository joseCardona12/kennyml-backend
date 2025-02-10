import { Router } from "express";
import AuthController from "../../controllers/auth.controller";

export const authRouter: Router = Router();
authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
