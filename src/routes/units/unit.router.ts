import { Router } from "express";
import UnitController from "../../controllers/unit.controller";

const unitRouter: Router = Router();
unitRouter.get("/", UnitController.getAllUnits);
export default unitRouter;
