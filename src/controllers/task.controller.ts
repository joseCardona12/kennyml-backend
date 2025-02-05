import { Request, Response } from "express";
import { container } from "tsyringe";
import { TaskService } from "../services";
import { UtilApplication } from "../utils";
import { TaskModel } from "../models";

class TaskController {
  public static async getTasks(_: Request, res: Response): Promise<void> {
    try {
      const taskService = container.resolve(TaskService);
      const tasks = await taskService.getTasks();
      if (!tasks) {
        res.status(404).json({
          message: "Tasks not found",
          code: 404,
        });
        return;
      }
      const dataTask = tasks as TaskModel[];
      res.status(200).json({
        message: "Ready tasks",
        tasks: dataTask.map((task: TaskModel) => {
          const taskData = task.get();
          return {
            ...taskData,
            status_id:
              taskData.status_id === "1"
                ? "open"
                : taskData.status_id === "2"
                ? "closed"
                : "unknown",
          };
        }),
        code: 200,
      });
    } catch (error: unknown) {
      console.error("Error to get task:", error);
      res.status(500).json({
        message: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        code: 500,
      });
    }
  }

  public static async createTask(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, start_date, end_date, status_id } = req.body;
      console.log(title, description, start_date, end_date, status_id);
      const existsParamVerify = UtilApplication.verifyExistsParam(
        title,
        description,
        start_date,
        end_date,
        status_id
      );

      console.log(existsParamVerify);

      if (!existsParamVerify) {
        res.status(400).json({
          message: "Is required all params",
          code: 400,
        });
        return;
      }

      if (status_id !== "open" && status_id !== "closed") {
        res.status(400).json({
          message: "Invalid status_id. It must be (open) or (closed).",
          code: 400,
        });
        return;
      }

      const taskService = container.resolve(TaskService);
      const createdTask = await taskService.createTask({
        title,
        description,
        start_date,
        end_date,
        status_id: status_id === "open" ? "1" : "2",
      });

      if (!createdTask) {
        res.status(400).json({
          message: "Error to create task. Task exists!",
          code: 400,
        });
        return;
      }

      res.status(201).json({
        message: "task created successfully",
        createdTask,
        code: 201,
      });
    } catch (error: unknown) {
      console.error("Error creating task:", error);
      res.status(500).json({
        message: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        code: 500,
      });
    }
  }
}

export default TaskController;
