import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createStats,
  getStats,
  updateStats,
  deleteStats,
} from "../controllers/statsController";
const statsRouter = Router();
statsRouter.get("/stats", verifyToken as any, getStats as any);
statsRouter.post("/stats", verifyToken as any, createStats as any);
statsRouter.patch("/stats", verifyToken as any, updateStats as any);
statsRouter.delete("/stats/:id", verifyToken as any, deleteStats as any);
export default statsRouter;
