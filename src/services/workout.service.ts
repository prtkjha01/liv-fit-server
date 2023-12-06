import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import WorkoutModel from "../models/wrokoutModel";

const createWorkout = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newWorkout = new WorkoutModel({ ...req.body, user: userId });
    await newWorkout.save();
    res.send({
      message: "Workout created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const getWorkout = async (req: User, res: Response) => {
  res.send("Workout Fetched");
};
const updateWorkout = async (req: User, res: Response) => {
  res.send("Workout Updated");
};
const deleteWorkout = async (req: User, res: Response) => {
  res.send("Workout Deleted");
};

export default { createWorkout, getWorkout, updateWorkout, deleteWorkout };
