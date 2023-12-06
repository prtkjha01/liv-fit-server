import { Request, Response } from "express";
import exerciseService from "../services/exercise.service";
import { User } from "../interfaces/userInterface";
// Create Exercise
export const createExercise = (req: User, res: Response) => {
  return exerciseService.createExercise(req, res);
};
//Fetch All Exercises
export const getExercises = (req: User, res: Response) => {
  return exerciseService.getExercises(req, res);
};
//Update Exercise
export const updateExercise = (req: User, res: Response) => {
  return exerciseService.updateExercise(req, res);
};
//Delete Exercise
export const deleteExercise = (req: User, res: Response) => {
  return exerciseService.deleteExercise(req, res);
};
