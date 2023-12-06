import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createTutorial,
  getTutorials,
  updateTutorial,
  deleteTutorial,
} from "../controllers/tutorialController";
const tutorialRouter = Router();
tutorialRouter.get("/tutorials", verifyToken as any, getTutorials as any);
tutorialRouter.post("/tutorial", verifyToken as any, createTutorial as any);
tutorialRouter.patch("/tutorial", verifyToken as any, updateTutorial as any);
tutorialRouter.delete(
  "/tutorial/:id",
  verifyToken as any,
  deleteTutorial as any
);
export default tutorialRouter;
