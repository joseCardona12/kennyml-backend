import { Router } from "express";
import PlaceController from "../../controllers/place.controller";

const unitRouter: Router = Router();
unitRouter.get("/", PlaceController.getAllPlaces);
export default unitRouter;
