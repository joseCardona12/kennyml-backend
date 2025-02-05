"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const services_1 = require("../services");
const utils_1 = require("../utils");
class TaskController {
    static getTasks(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskService = tsyringe_1.container.resolve(services_1.TaskService);
                const tasks = yield taskService.getTasks();
                if (!tasks) {
                    res.status(404).json({
                        message: "Tasks not found",
                        code: 404,
                    });
                    return;
                }
                const dataTask = tasks;
                res.status(200).json({
                    message: "Ready tasks",
                    tasks: dataTask.map((task) => {
                        const taskData = task.get();
                        return Object.assign(Object.assign({}, taskData), { status_id: taskData.status_id === "1"
                                ? "open"
                                : taskData.status_id === "2"
                                    ? "closed"
                                    : "unknown" });
                    }),
                    code: 200,
                });
            }
            catch (error) {
                console.error("Error to get task:", error);
                res.status(500).json({
                    message: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}`,
                    code: 500,
                });
            }
        });
    }
    static createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, start_date, end_date, status_id } = req.body;
                console.log(title, description, start_date, end_date, status_id);
                const existsParamVerify = utils_1.UtilApplication.verifyExistsParam(title, description, start_date, end_date, status_id);
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
                const taskService = tsyringe_1.container.resolve(services_1.TaskService);
                const createdTask = yield taskService.createTask({
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
            }
            catch (error) {
                console.error("Error creating task:", error);
                res.status(500).json({
                    message: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}`,
                    code: 500,
                });
            }
        });
    }
}
exports.default = TaskController;
