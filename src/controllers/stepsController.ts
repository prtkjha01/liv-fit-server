import { Request, Response } from "express";
import stepsService from "../services/steps.service";
import { User } from "../interfaces/userInterface";
// Create User Steps Record
export const createStepsRecord = (req: User, res: Response) => {
  return stepsService.createStepsRecord(req, res);
};
//Fetch User Steps Record
export const getStepsRecord = (req: User, res: Response) => {
  return stepsService.getStepsRecord(req, res);
};
//Update User Steps Record
export const updateStepsRecord = (req: User, res: Response) => {
  return stepsService.updateStepsRecord(req, res);
};
//Delete User Steps Record
export const deleteStepsRecord = (req: User, res: Response) => {
  return stepsService.deleteStepsRecord(req, res);
};
