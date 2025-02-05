import "reflect-metadata";
import { container } from "tsyringe";
import { TaskModel } from "../models";
import { TaskService } from "../services";

container.registerSingleton<TaskModel>(TaskModel);
container.registerSingleton<TaskService>(TaskService);
