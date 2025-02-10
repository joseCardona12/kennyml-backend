import { Router } from "express";
import routerTask from "./tasks/route.task";
import { authRouter } from "./auth/auth.router";
import { twilioRouter } from "./twilio/twilio.route";
import { verification_codeRouter } from "./verification_code/verification_code.route";

const router: Router = Router();
router.use("/auth", authRouter);
router.use("/tasks", routerTask);
router.use("/sms", twilioRouter);
router.use("/codes", verification_codeRouter);

export default router;
