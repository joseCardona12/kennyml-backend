import { Router } from "express";
import StatusController from "../../controllers/status.controller";

const statusRouter: Router = Router();
statusRouter.get("/", StatusController.getAllStatus);
export default statusRouter;
