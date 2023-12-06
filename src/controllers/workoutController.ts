import { Request, Response } from "express";
import workoutService from "../services/workout.service";
import { User } from "../interfaces/userInterface";
// Create User Stats
export const createWorkout = (req: User, res: Response) => {
  return workoutService.createWorkout(req, res);
};
//Fetch User Workout
export const getWorkout = (req: User, res: Response) => {
  return workoutService.getWorkout(req, res);
};
//Update User Workout
export const updateWorkout = (req: User, res: Response) => {
  return workoutService.updateWorkout(req, res);
};
//Delete User Workout
export const deleteWorkout = (req: User, res: Response) => {
  return workoutService.deleteWorkout(req, res);
};
