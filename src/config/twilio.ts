import { configDotenv } from "dotenv";
import twilio from "twilio";

configDotenv();

const {
    ACCOUNT_SID:account_sid,
    AUTH_TOKEN:auth_token,
} = process.env;

export const twilioClient = twilio(account_sid,auth_token);