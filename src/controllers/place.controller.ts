import { container } from "tsyringe";
import { Request, Response } from "express";
import PlaceService from "../services/place.service";

class PlaceController {
  public static async getAllPlaces(_: Request, res: Response): Promise<void> {
    const placeService = container.resolve(PlaceService);
    try {
      const places = await placeService.getAllPlaces();
      res.status(200).json({
        message: "Get all places success",
        statusCode: 200,
        data: places,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
      });
    }
  }
}

export default PlaceController;
