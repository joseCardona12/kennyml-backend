"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/containter");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./routes/route"));
const utils_1 = require("./utils");
const app = (0, express_1.default)(); // Init projec using express
app.use(express_1.default.json()); // Middleware for available the transfer data with json format.
app.use((0, cors_1.default)({
    // Config router
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use("/api", route_1.default); // Middleware router
utils_1.UtilApplication.initServer(app); // Init server with config seequelize
