import express from "express";
import cors from "cors";
import jobRoutes from "./routes/JobRoutes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://shamsad-job-tracker.vercel.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/jobs", jobRoutes);

export default app;
