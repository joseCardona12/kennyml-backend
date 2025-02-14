import { injectable } from "tsyringe";
import { StatusModel } from "../models";

@injectable()
export default class StatusRepository {
  public async findAll(): Promise<StatusModel[] | null> {
    try {
      return await StatusModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
