import { injectable } from "tsyringe";
import UnitModel from "../models/unit.model";

@injectable()
export default class UnitRepository {
  public async findAll(): Promise<UnitModel[] | null> {
    try {
      return await UnitModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
