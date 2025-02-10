import { inject, injectable } from "tsyringe";
import { Verification_codeRepository } from "../repositories";
import { VerificacionCodeModel } from "../models";

@injectable()
export default class Verification_codeService {
  constructor(
    @inject(Verification_codeRepository)
    private verification_codeRepository: Verification_codeRepository
  ) {}

  public async createCode(
    code: Partial<VerificacionCodeModel>
  ): Promise<VerificacionCodeModel | null> {
    try {
      const data = await this.verification_codeRepository.createCode(code);
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      console.log({
        message: `${error}`,
      });
      throw Error(`${error}`);
    }
  }

  public async getCodes(): Promise<VerificacionCodeModel[] | null> {
    try {
      return await this.verification_codeRepository.getCodes();
    } catch (error: unknown) {
      throw Error(`${error}`);
    }
  }
}
