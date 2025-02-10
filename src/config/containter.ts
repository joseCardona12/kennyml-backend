import "reflect-metadata";
import { container } from "tsyringe";
import { TaskModel, UserModel } from "../models";
import { TaskService } from "../services";
import AuthService from "../services/auth.service";
import TwilioService from "../services/twilio.service";

container.registerSingleton<TaskModel>(TaskModel);
container.registerSingleton<TaskService>(TaskService);
container.registerSingleton<UserModel>(UserModel);
container.registerSingleton<AuthService>(AuthService);
container.registerSingleton<TwilioService>(TwilioService);
