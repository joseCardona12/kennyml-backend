import { Router } from "express";
import TwilioController from "../../controllers/twilio.controller";

export const twilioRouter: Router = Router();
twilioRouter.post("/", TwilioController.sendVerificationTwilio);
