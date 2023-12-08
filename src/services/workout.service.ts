import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import WorkoutModel from "../models/wrokoutModel";
import ExerciseModel from "../models/exerciseModel";

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
  try {
    const workouts = await WorkoutModel.find(
      {
        is_deleted: false,
      },
      { updated_at: 0 }
    ).populate({
      path: "exercises.data",
      model: ExerciseModel,
      select: "-updated_at -created_at -is_deleted",
    });
    if (!workouts) {
      throw new Error("No stats found!");
    } else {
      res.send(workouts);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const updateWorkout = async (req: User, res: Response) => {
  res.send("Workout Updated");
};
const deleteWorkout = async (req: User, res: Response) => {
  res.send("Workout Deleted");
};

export default { createWorkout, getWorkout, updateWorkout, deleteWorkout };
