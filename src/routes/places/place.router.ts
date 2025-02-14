import { Router } from "express";
import PlaceController from "../../controllers/place.controller";

const placeRouter: Router = Router();
placeRouter.get("/", PlaceController.getAllPlaces);
export default placeRouter;
