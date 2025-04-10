import express from "express";
import {
  createJob,
  getJobs,
  updateStatus,
  deleteJob,
} from "../controllers/JobController.js";
const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.patch("/:id", updateStatus);
router.delete("/:id", deleteJob);

export default router;
