import { inject, injectable } from "tsyringe";
import StatusRepository from "../repositories/status.repository";
import { StatusModel } from "../models";

@injectable()
export default class StatusService {
  constructor(
    @inject(StatusRepository) private statusRepository: StatusRepository
  ) {}

  public async getAllStatus(): Promise<StatusModel[] | null> {
    try {
      return await this.statusRepository.findAll();
    } catch (error: unknown) {
      throw error;
    }
  }
}
