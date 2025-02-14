import { container } from "tsyringe";
import UnitService from "../services/unit.service";
import { Request, Response } from "express";

class UnitController {
  public static async getAllUnits(_: Request, res: Response): Promise<void> {
    const unitService = container.resolve(UnitService);
    try {
      const units = await unitService.getAllUnits();
      res.status(200).json({
        message: "Get all units success",
        statusCode: 200,
        data: units,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
      });
    }
  }
}

export default UnitController;
