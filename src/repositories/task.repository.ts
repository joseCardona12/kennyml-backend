import { injectable } from "tsyringe";
import { TaskModel } from "../models";
import { UtilApplication } from "../utils";

@injectable()
export default class TaskRepository {
  public async findAll(): Promise<
    TaskModel[] | { message: string } | undefined
  > {
    try {
      return await TaskModel.findAll();
    } catch (error: unknown) {
      UtilApplication.returnMessage("findAll", "TaskRepository");
    }
  }

  public async getByTitle(
    title: string | undefined
  ): Promise<TaskModel | { message: string } | undefined | null> {
    try {
      return await TaskModel.findOne({
        where: { title },
      });
    } catch (error: unknown) {
      UtilApplication.returnMessage("getByTitle", "TaskRepository");
    }
  }

  public async create(
    task: Partial<TaskModel>
  ): Promise<TaskModel | { message: string } | undefined> {
    try {
      return await TaskModel.create(task);
    } catch (error: unknown) {
      UtilApplication.returnMessage("Create", "TaskRepository");
    }
  }
}
