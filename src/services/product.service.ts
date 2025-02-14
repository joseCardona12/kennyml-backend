import { inject, injectable } from "tsyringe";
import ProductRepository from "../repositories/product.repository";
import ProductModel from "../models/product.model";

@injectable()
export default class ProductService {
  constructor(
    @inject(ProductRepository) private productRepository: ProductRepository
  ) {}

  public async getAllProducts(): Promise<ProductModel[] | null> {
    try {
      return await this.productRepository.findAll();
    } catch (error: unknown) {
      throw error;
    }
  }

  public async createProduct(
    product: Partial<ProductModel>
  ): Promise<ProductModel | null> {
    try {
      return await this.productRepository.create(product);
    } catch (error: unknown) {
      throw error;
    }
  }

  public async updateProduct(
    product: Partial<ProductModel>,
    id: number
  ): Promise<ProductModel | undefined> {
    try {
      return await this.productRepository.update(product, id);
    } catch (error: unknown) {
      throw error;
    }
  }

  public async deleteProduct(id: number): Promise<void> {
    try {
      await this.productRepository.destroy(id);
    } catch (error: unknown) {
      throw error;
    }
  }
}
