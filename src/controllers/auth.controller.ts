import { Request, Response } from "express";
import { UtilApplication } from "../utils";
import { container } from "tsyringe";
import AuthService from "../services/auth.service";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";
import { secret } from "../config/loadEnv";

export default class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const existsParamVerify = UtilApplication.verifyExistsParam(
      email,
      password
    );
    if (!existsParamVerify) {
      res.status(400).json({
        message: "Is required all params",
        statusCode: 400,
      });
      return;
    }
    const authService = container.resolve(AuthService);
    try {
      const authUserCreate = await authService.login({
        email,
        password,
      });
      console.log("auht", authUserCreate);
      if (!authUserCreate) {
        res.status(404).json({
          message: "Error, user not found",
          statusCode: 404,
        });
        return;
      }
      console.log("before token");
      const tokenGenerate = AuthController.generateToken({ email, password });
      console.log("after token");
      if (!tokenGenerate) {
        res.status(400).json({
          messgage: "Error to create token",
          statusCode: 400,
        });
        return;
      }
      res.status(200).json({
        message: "User Found. Login success",
        statusCode: 200,
        token: tokenGenerate,
        user: authUserCreate,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
      });
    }
  }

  public static async register(req: Request, res: Response): Promise<void> {
    const { name, lastName, email, cellphone, password, codeConnection } = req.body;
    const existsParamVerify = UtilApplication.verifyExistsParam(
      name,
      lastName,
      email,
      cellphone,
      password,
      codeConnection,
    );
    if (!existsParamVerify) {
      res.status(400).json({
        message: "Error. Is required all params",
        statusCode: 400,
      });
      return;
    }
    const authService = container.resolve(AuthService);
    try {
      const authUserCreate = await authService.register({
        name,
        lastName,
        email,
        cellphone,
        password,
      }, codeConnection);

      if (!authUserCreate) {
        res.status(400).json({
          message: "Error to register user",
          statusCode: 400,
        });
        return;
      }

      const tokenGenerate = AuthController.generateToken({
        name,
        lastName,
        email,
        cellphone,
        password,
      });
      if (!tokenGenerate) {
        res.status(400).json({
          message: "Error to generate token",
          statusCode: 400,
        });
        return;
      }
      res.status(201).json({
        message: "User created correctly",
        statusCode: 201,
        token: tokenGenerate,
        user: authUserCreate,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: `${error}`,
        statusCode: 500,
      });
    }
  }

  public static generateToken(user: Partial<UserModel>): string {
    console.log("Error", user);
    return jwt.sign(user, secret, { expiresIn: "1h" });
  }
}
