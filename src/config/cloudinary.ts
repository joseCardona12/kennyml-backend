import { configDotenv } from "dotenv";
import cloudinary from "cloudinary";

configDotenv();

const {
  API_KEY_CLOUDINARY: cloudinary_api_key,
  API_SECRET_CLOUDINARY: cloudinary_api_secret,
  CLOUD_NAME_CLOUDINARY: cloudinary_cloud_name,
} = process.env;

export const cloudinaryConfig = cloudinary.v2.config({
  cloud_name: cloudinary_cloud_name,
  api_key: cloudinary_api_key,
  api_secret: cloudinary_api_secret,
});
