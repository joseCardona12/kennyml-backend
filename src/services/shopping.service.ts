import { inject, injectable } from "tsyringe";
import ShoppingRepository from "../repositories/shopping.repository";
import { ShoppingModel } from "../models";

@injectable()
export default class ShoppingService {
  constructor(
    @inject(ShoppingRepository) private shoppingRepository: ShoppingRepository
  ) {}

  public async getAllShoppings(): Promise<ShoppingModel[] | null> {
    try {
      return await this.shoppingRepository.getAll();
    } catch (error: unknown) {
      throw error;
    }
  }

  public async createShopping(
    shopping: Partial<ShoppingModel>
  ): Promise<ShoppingModel | null> {
    try {
      return await this.shoppingRepository.createShopping(shopping);
    } catch (error: unknown) {
      throw error;
    }
  }
}
