import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ApplicationRouters } from "./app/routes";

// Create an Express application
const app: Application = express();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Technest",
  });
});

app.use("/api/v1", ApplicationRouters);

// Export the application
export default app;
