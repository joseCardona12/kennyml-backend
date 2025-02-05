import { inject, injectable } from "tsyringe";
import { TaskRepository } from "../repositories";
import { TaskModel } from "../models";

@injectable()
export default class TaskService {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  public async getTasks(): Promise<
    TaskModel[] | { message: string } | undefined
  > {
    return await this.taskRepository.findAll();
  }

  public async createTask(
    task: Partial<TaskModel>,
  ): Promise<TaskModel | { message: string } | undefined> {
    const foundTask = await this.taskRepository.getByTitle(task.title);
    if(foundTask)return;
    return await this.taskRepository.create(task);
  }
}
