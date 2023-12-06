import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController";
const workoutRouter = Router();
workoutRouter.get("/workout", verifyToken as any, getWorkout as any);
workoutRouter.post("/workout", verifyToken as any, createWorkout as any);
workoutRouter.patch("/workout", verifyToken as any, updateWorkout as any);
workoutRouter.delete("/workout/:id", verifyToken as any, deleteWorkout as any);
export default workoutRouter;
