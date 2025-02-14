import { Request, Response } from "express";
import { UtilApplication } from "../utils";
import { container } from "tsyringe";
import ProductService from "../services/product.service";
class ProductController {
  public static async getAllProducts(_: Request, res: Response): Promise<void> {
    const productService = container.resolve(ProductService);
    try {
      const products = await productService.getAllProducts();
      res.status(200).json({
        message: "Get all products sucess",
        statusCode: 200,
        data: products,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }

  public static async createProduct(
    req: Request,
    res: Response
  ): Promise<void> {
    const {
      title,
      description,
      quantity,
      start_date,
      end_date,
      status_id,
      unit_id,
      place_id,
      user_id,
    } = req.body;
    const existsParamVerify: boolean = UtilApplication.verifyExistsParam(
      title,
      description,
      quantity,
      start_date,
      end_date,
      status_id,
      unit_id,
      place_id,
      user_id
    );

    if (!existsParamVerify) {
      res.status(400).json({
        message: "Error. Is required all params",
        statusCode: 400,
      });
      return;
    }
    const productService = container.resolve(ProductService);
    try {
      const product = await productService.createProduct({
        title,
        description,
        quantity,
        start_date,
        end_date,
        status_id,
        unit_id,
        place_id,
        user_id,
      });
      res.status(200).json({
        message: "Product created success",
        statusCode: 200,
        data: product,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }

  public static async updateProduct(
    req: Request,
    res: Response
  ): Promise<void> {
    const { id } = req.params;
    const {
      title,
      description,
      quantity,
      start_date,
      end_date,
      status_id,
      unit_id,
      place_id,
      user_id,
    } = req.body;

    if (!id) {
      res.status(400).json({
        message: "Is required id product",
        statusCode: 400,
      });
      return;
    }
    const existsParamVerify: boolean = UtilApplication.verifyExistsParam(
      title,
      description,
      quantity,
      start_date,
      end_date,
      status_id,
      unit_id,
      place_id,
      user_id
    );
    if (!existsParamVerify) {
      res.status(400).json({
        message: "Is required all params",
        statusCode: 400,
      });
      return;
    }
    const productService = container.resolve(ProductService);
    try {
      const product = await productService.updateProduct(
        {
          title,
          description,
          quantity,
          start_date,
          end_date,
          status_id,
          unit_id,
          place_id,
          user_id,
        },
        parseInt(id)
      );
      res.status(200).json({
        message: "Product updated success",
        statusCode: 200,
        data: product,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }

  public static async deleteProduct(
    req: Request,
    res: Response
  ): Promise<void> {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        message: "Error. Is required id product",
        statusCode: 400,
      });
      return;
    }
    const productService = container.resolve(ProductService);
    try {
      await productService.deleteProduct(parseInt(id));
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server  ${error}`,
        statusCode: 500,
      });
    }
  }
}

export default ProductController;
