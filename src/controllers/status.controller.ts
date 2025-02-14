import { container } from "tsyringe";
import { Request, Response } from "express";
import StatusService from "../services/status.service";

class StatusController {
  public static async getAllStatus(_: Request, res: Response): Promise<void> {
    const statusService = container.resolve(StatusService);
    try {
      const status = await statusService.getAllStatus();
      res.status(200).json({
        message: "Get all status success",
        statusCode: 200,
        data: status,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
      });
    }
  }
}

export default StatusController;
