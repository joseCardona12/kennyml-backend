import { injectable } from "tsyringe";
import ProductModel from "../models/product.model";

@injectable()
export default class ProductRepository {
  public async findAll(): Promise<ProductModel[] | null> {
    try {
      return await ProductModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async create(
    product: Partial<ProductModel>
  ): Promise<ProductModel | null> {
    try {
      return await ProductModel.create(product);
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async update(
    product: Partial<ProductModel>,
    id: number
  ): Promise<ProductModel | undefined> {
    try {
      const [rowsUpdated, updatedProducts] = await ProductModel.update(
        product,
        {
          where: { id },
          returning: true,
        }
      );

      if (rowsUpdated === 0) return;
      return updatedProducts[0];
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async destroy(id: number): Promise<number> {
    try {
      return await ProductModel.destroy({
        where: { id },
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
