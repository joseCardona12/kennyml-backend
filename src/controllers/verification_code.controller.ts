import { Request, Response } from "express";
import { container } from "tsyringe";
import { Verification_codeService } from "../services";
export default class Verification_codeController {
  public static async createCode(req: Request, res: Response): Promise<void> {
    const { code } = req.body;
    if (!code) {
      res.status(400).json({
        message: "Error. Is required code",
        statusCode: 400,
      });
      return;
    }

    console.log("code", code);

    const verification_codeService = container.resolve(
      Verification_codeService
    );
    try {
      await verification_codeService.createCode({
        code,
      });
      res.status(201).json({
        message: "Code created success",
        statusCode: 201,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
      });
    }
  }

  public static async getAllCode(_: Request, res: Response): Promise<void> {
    const verification_codeService = container.resolve(
      Verification_codeService
    );
    try {
      const codes = await verification_codeService.getCodes();
      res.status(200).json({
        message: "Get all code correctly",
        codes,
        statusCode: 200,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
      });
    }
  }
}
