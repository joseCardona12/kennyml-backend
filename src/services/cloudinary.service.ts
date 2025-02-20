import { injectable } from "tsyringe";
import "../config/cloudinary";
import cloudinary, { UploadApiResponse } from "cloudinary";

@injectable()
export default class CloudinaryService {
  public async createCloudinary(file: string): Promise<UploadApiResponse> {
    try {
      const response = await cloudinary.v2.uploader.upload(file, {
        folder: "images",
      });
      return response;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
