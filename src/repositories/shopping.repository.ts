import { injectable } from "tsyringe";
import { ShoppingModel } from "../models";

@injectable()
export default class ShoppingRepository {
  public async getAll(): Promise<ShoppingModel[] | null> {
    try {
      return await ShoppingModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async createShopping(
    shopping: Partial<ShoppingModel>
  ): Promise<ShoppingModel | null> {
    try {
      return await ShoppingModel.create(shopping);
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}
