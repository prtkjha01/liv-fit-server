import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createSleepRecord,
  getSleepRecord,
  updateSleepRecord,
  deleteSleepRecord,
} from "../controllers/sleepController";
const sleepRouter = Router();
sleepRouter.get("/sleep", verifyToken as any, getSleepRecord as any);
sleepRouter.post("/sleep", verifyToken as any, createSleepRecord as any);
sleepRouter.patch("/sleep", verifyToken as any, updateSleepRecord as any);
sleepRouter.delete("/sleep/:id", verifyToken as any, deleteSleepRecord as any);
export default sleepRouter;
