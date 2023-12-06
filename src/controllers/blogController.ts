import { Request, Response } from "express";
import blogService from "../services/blog.service";
import { User } from "../interfaces/userInterface";
// Create User Steps Record
export const createBlog = (req: User, res: Response) => {
  return blogService.createBlog(req, res);
};
//Fetch User Steps Record
export const getBlogs = (req: User, res: Response) => {
  return blogService.getBlogs(req, res);
};
//Update User Steps Record
export const updateBlog = (req: User, res: Response) => {
  return blogService.updateBlog(req, res);
};
//Delete User Steps Record
export const deleteBlog = (req: User, res: Response) => {
  return blogService.deleteBlog(req, res);
};
