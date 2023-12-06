import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import BlogModel from "../models/blogModel";

const createBlog = async (req: User, res: Response) => {
  try {
    const newBlog = new BlogModel({ ...req.body });
    await newBlog.save();
    res.send({
      message: "Blog created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const getBlogs = async (req: User, res: Response) => {
  try {
    const blog = await BlogModel.find(
      {
        is_deleted: false,
      },
      { updated_at: 0 }
    );
    if (!blog) {
      throw new Error("No stats found!");
    } else {
      res.send(blog);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const updateBlog = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!blog) {
      throw new Error("No Steps Record found!");
    } else {
      res.send(blog);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

const deleteBlog = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const blog = await BlogModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!blog) {
      throw new Error("No Steps Record found!");
    } else {
      res.send(blog);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};
