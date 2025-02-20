import { Request, Response } from "express";
import { container } from "tsyringe";
import CloudinaryService from "../services/cloudinary.service";

class CloudinaryController {
  public static async createCloudinary(
    req: Request,
    res: Response
  ): Promise<void> {
    const file = req.body.file;
    if (!file) {
      res.status(400).json({
        message: "Is required file",
        statusCode: 400,
      });
      return;
    }

    const cloudinaryService = container.resolve(CloudinaryService);
    try {
      const cloudinaryCreate = await cloudinaryService.createCloudinary(file);
      res.status(201).json({
        message: "Cloudinary created success",
        statusCode: 201,
        data: cloudinaryCreate,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }
}

export default CloudinaryController;
