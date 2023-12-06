import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createWaterRecord,
  getWaterRecord,
  updateWaterRecord,
  deleteWaterRecord,
} from "../controllers/waterController";
const waterRouter = Router();
waterRouter.get("/water", verifyToken as any, getWaterRecord as any);
waterRouter.post("/water", verifyToken as any, createWaterRecord as any);
waterRouter.patch("/water", verifyToken as any, updateWaterRecord as any);
waterRouter.delete("/water/:id", verifyToken as any, deleteWaterRecord as any);
export default waterRouter;
