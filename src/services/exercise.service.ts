import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import ExerciseModel from "../models/exerciseModel";

const createExercise = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const newExercise = new ExerciseModel({ ...req.body, user: userId });
    await newExercise.save();
    res.send({
      message: "Exercise created successfully!",
    });
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const getExercises = async (req: User, res: Response) => {
  //   const { userId } = req.user;
  try {
    // (typeof ExerciseModel)[]
    const exercises: any[] = await ExerciseModel.find({
      is_deleted: false,
    }).select("-updated_at -created_at");
    if (!exercises) {
      throw new Error("No Exercises found!");
    } else {
      res.send(exercises);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const updateExercise = async (req: User, res: Response) => {
  const { userId } = req.user;
  try {
    const stats = await ExerciseModel.findOneAndUpdate(
      { user: userId },
      { $set: { ...req.body } },
      { new: true }
    );
    if (!stats) {
      throw new Error("No stats found!");
    } else {
      res.send(stats);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};
const deleteExercise = async (req: User, res: Response) => {
  const id = req.params.id;
  try {
    const stats = await ExerciseModel.findOneAndUpdate(
      { _id: id },
      { $set: { is_deleted: true } },
      { new: true }
    );
    if (!stats) {
      throw new Error("No stats found!");
    } else {
      res.send(stats);
    }
  } catch (error: any) {
    res.send({
      statusCode: error.statusCode || 500,
      message: error.message || "Something went wrong!",
    });
  }
};

export default { createExercise, getExercises, updateExercise, deleteExercise };
