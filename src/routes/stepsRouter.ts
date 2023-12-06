import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createStepsRecord,
  getStepsRecord,
  updateStepsRecord,
  deleteStepsRecord,
} from "../controllers/stepsController";
const stepsRouter = Router();
stepsRouter.get("/steps", verifyToken as any, getStepsRecord as any);
stepsRouter.post("/steps", verifyToken as any, createStepsRecord as any);
stepsRouter.patch("/steps", verifyToken as any, updateStepsRecord as any);
stepsRouter.delete("/steps/:id", verifyToken as any, deleteStepsRecord as any);
export default stepsRouter;
