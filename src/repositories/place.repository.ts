import { injectable } from "tsyringe";
import PlaceModel from "../models/place.model";

@injectable()
export default class PlaceRepository {
  public async findAll(): Promise<PlaceModel[] | null> {
    try {
      return await PlaceModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
