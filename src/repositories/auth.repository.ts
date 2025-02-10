import { injectable } from "tsyringe";
import { UserModel } from "../models";

@injectable()
export default class AuthRepository {
  public async register(
    authUser: Partial<UserModel>
  ): Promise<UserModel | null> {
    try {
      return await UserModel.create(authUser);
    } catch (error: unknown) {
      throw new Error("Error to login user");
    }
  }
  public async login(
    email?: string,
    password?: string
  ): Promise<UserModel | null> {
    try {
      return await UserModel.findOne({
        where: {
          email,
          password,
        },
      });
    } catch (error: unknown) {
      throw new Error("Error to search user by email and password");
    }
  }

  public async getByCellphone(cellphone: string): Promise<UserModel | null> {
    try {
      return await UserModel.findOne({
        where: { cellphone },
      });
    } catch (error: unknown) {
      throw new Error("Error to search user by cellphone");
    }
  }

  public async getByEmail(email: string): Promise<UserModel | null> {
    try {
      return await UserModel.findOne({
        where: { email },
      });
    } catch (error: unknown) {
      throw new Error("Error to search user by email");
    }
  }
}
