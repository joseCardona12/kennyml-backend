import { Router } from "express";
import { TaskController } from "../../controllers";

const routerTask: Router = Router();
routerTask.get("/", TaskController.getTasks);
routerTask.post("/", TaskController.createTask);

export default routerTask;
