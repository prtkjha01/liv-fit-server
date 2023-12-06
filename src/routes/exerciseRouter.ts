import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createExercise,
  getExercises,
  updateExercise,
  deleteExercise,
} from "../controllers/exerciseController";
const exerciseRouter = Router();
exerciseRouter.get("/exercises", verifyToken as any, getExercises as any);
exerciseRouter.post("/exercise", verifyToken as any, createExercise as any);
exerciseRouter.patch("/exercise", verifyToken as any, updateExercise as any);
exerciseRouter.delete(
  "/exercise/:id",
  verifyToken as any,
  deleteExercise as any
);
export default exerciseRouter;
