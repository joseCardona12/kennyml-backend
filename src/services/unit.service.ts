import { inject, injectable } from "tsyringe";
import UnitRepository from "../repositories/unit.repository";
import UnitModel from "../models/unit.model";

@injectable()
export default class UnitService {
  constructor(@inject(UnitRepository) private unitRepository: UnitRepository) {}

  public async getAllUnits(): Promise<UnitModel[] | null> {
    try {
      return await this.unitRepository.findAll();
    } catch (error: unknown) {
      throw error;
    }
  }
}
