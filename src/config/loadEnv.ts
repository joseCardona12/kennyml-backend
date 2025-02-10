import { configDotenv } from "dotenv";
configDotenv();

export const {
  PORT: port = "3002",
  HOST_DB: host_db = "localhost:3002",
  PORT_DB: port_db = "3003",
  USER_DB: user_db = "root",
  PASSWORD_DB: password_db = "",
  NAME_DB: name_db = "",
  SECRET: secret = "secret",
  PHONE_NUMBER: twilio_phone_number,
} = process.env;
