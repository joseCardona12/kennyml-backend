import "./config/containter";
import express, { Express } from "express";
import cors from "cors";
import router from "./routes/route";
import { UtilApplication } from "./utils";

const app: Express = express(); // Init projec using express
app.use(express.json()); // Middleware for available the transfer data with json format.
app.use(
  cors({
    // Config router
    origin: ["https://kennyml-frontend.vercel.app", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", router); // Middleware router
UtilApplication.initServer(app); // Init server with config seequelize
