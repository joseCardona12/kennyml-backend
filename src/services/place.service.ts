import { inject, injectable } from "tsyringe";
import PlaceModel from "../models/place.model";
import PlaceRepository from "../repositories/place.repository";

@injectable()
export default class PlaceService {
  constructor(
    @inject(PlaceRepository) private placeRepository: PlaceRepository
  ) {}

  public async getAllPlaces(): Promise<PlaceModel[] | null> {
    try {
      return await this.placeRepository.findAll();
    } catch (error: unknown) {
      throw error;
    }
  }
}
