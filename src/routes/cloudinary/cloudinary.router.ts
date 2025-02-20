import { Router } from "express";
import { CloudinaryController } from "../../controllers";

const cloudinaryRouter: Router = Router();
cloudinaryRouter.post("/", CloudinaryController.createCloudinary);

export default cloudinaryRouter;
