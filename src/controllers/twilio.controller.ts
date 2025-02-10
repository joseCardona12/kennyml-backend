import { Request, Response } from "express";
import { container } from "tsyringe";
import TwilioService from "../services/twilio.service";
export default class TwilioController {
  public static async sendVerificationTwilio(
    req: Request,
    res: Response
  ): Promise<void> {
    const { phone_number, code } = req.body;
    if (!phone_number) {
      res.status(400).json({
        message: "Error. Is required phoneNumber",
        statusCode: 400,
      });
      return;
    }
    const twilioService = container.resolve(TwilioService);
    try {
      const response = await twilioService.sendVerificationCode(
        phone_number,
        code
      );
      console.log("res", response);
      res.status(201).json({
        message: "Message sent correctly",
        statusCode: 201,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
      });
    }
  }
}
