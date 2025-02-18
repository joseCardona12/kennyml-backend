import { Request, Response } from "express";
import { container } from "tsyringe";
import ShoppingService from "../services/shopping.service";
import { UtilApplication } from "../utils";

class ShoppingController {
  public static async getAllShoppings(
    _: Request,
    res: Response
  ): Promise<void> {
    const shoppingService = container.resolve(ShoppingService);
    try {
      const shoppings = await shoppingService.getAllShoppings();
      res.status(200).json({
        message: "Get all shoppings success",
        statusCode: 200,
        data: shoppings,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }

  public static async createShopping(
    req: Request,
    res: Response
  ): Promise<void> {
    const { url_image, price, product_id } = req.body;
    const existsParamVerify = UtilApplication.verifyExistsParam(
      url_image,
      price,
      product_id
    );
    if (!existsParamVerify) {
      res.status(400).json({
        message: "Error. Is required all params",
        statusCode: 400,
      });
      return;
    }
    const shoppingService = container.resolve(ShoppingService);
    try {
      const shopping = await shoppingService.createShopping({
        url_image,
        price,
        product_id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({
        message: "Shopping creted success",
        statusCode: 201,
        data: shopping,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `Error internal server ${error}`,
        statusCode: 500,
      });
    }
  }
}

export default ShoppingController;
