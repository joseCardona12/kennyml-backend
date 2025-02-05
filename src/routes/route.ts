
import { Router } from "express";
import routerTask from "./tasks/route.task";

const router:Router = Router();
router.use("/tasks", routerTask);

export default router;