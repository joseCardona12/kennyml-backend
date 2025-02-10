import { injectable } from "tsyringe";
import { twilioClient } from "../config";
import { twilio_phone_number } from "../config/loadEnv";

@injectable()
export default class TwilioService {
  public async sendVerificationCode(
    phone_number: string,
    code: string
  ): Promise<void> {
    try {
      const message = await twilioClient.messages.create({
        body: `Your verification code is: ${code}. Please enter code on the page Kennyml.`,
        from: twilio_phone_number,
        to: phone_number,
      });
      console.log("dasdaddas", message.sid);
      return;
    } catch (error: unknown) {
      throw new Error("Erro to send verficattion code with twilio service");
    }
  }
}
