import { injectable } from "tsyringe";
import { VerificacionCodeModel } from "../models";

@injectable()
export default class Verification_codeRepository {
  public async createCode(
    code: Partial<VerificacionCodeModel>
  ): Promise<VerificacionCodeModel | null> {
    try {
      console.log("code---", code);
      return await VerificacionCodeModel.create(code);
    } catch (error: unknown) {
      throw new Error("Error to create code");
    }
  }

  public async getCodes(): Promise<VerificacionCodeModel[] | null> {
    try {
      return await VerificacionCodeModel.findAll();
    } catch (error: unknown) {
      throw new Error("Error to get codes");
    }
  }
}
