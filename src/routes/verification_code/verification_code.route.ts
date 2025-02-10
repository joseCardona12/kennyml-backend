import { Router } from "express";
import { Verification_codeController } from "../../controllers";

export const verification_codeRouter: Router = Router();
verification_codeRouter.get("/", Verification_codeController.getAllCode);
verification_codeRouter.post("/", Verification_codeController.createCode);
