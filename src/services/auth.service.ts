import { inject, injectable } from "tsyringe";
import AuthRepository from "../repositories/auth.repository";
import { UserModel } from "../models";
import { UtilApplication } from "../utils";

@injectable()
export default class AuthService {
  constructor(@inject(AuthRepository) private authRepository: AuthRepository) {}

  public async login(
    authUser: Partial<UserModel>
  ): Promise<UserModel | undefined | null> {
    try {
      return await this.authRepository.login(authUser.email, authUser.password);
    } catch (error: unknown) {
      throw Error(`${error}`);
    }
  }

  public async register(
    authUser: Partial<UserModel>,
    codeConnection: string
  ): Promise<UserModel | undefined | null> {
    const user: Partial<UserModel> = {
      name: authUser.name,
      lastName: authUser.lastName,
      email: authUser.email,
      cellphone: authUser.cellphone,
      document_number: "1234567890",
      address: "cll 0",
      about_me: "Generate about me",
      password: authUser.password,
      url_image: "/images/avatar_random.jpg",
      type_document_id: 2,
      role_id: 2,
      level_id: 1,
      city_id: 1,
      code_verification_id: codeConnection,
    };
    try {
      const userFound = await this.authRepository.getByCellphone(
        authUser.cellphone!
      );
      if (userFound) throw new Error("Error, User exists");
      return await this.authRepository.register(user);
    } catch (error: unknown) {
      throw Error(`${error}`);
    }
  }
}
