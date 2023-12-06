import { Router } from "express";
import { verifyToken, checkAdmin } from "../middlewares/auth";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
const stepsRouter = Router();
stepsRouter.get("/blogs", verifyToken as any, getBlogs as any);
stepsRouter.post("/blog", verifyToken as any, createBlog as any);
stepsRouter.patch("/blog/:id", verifyToken as any, updateBlog as any);
stepsRouter.delete("/blog/:id", verifyToken as any, deleteBlog as any);
export default stepsRouter;
