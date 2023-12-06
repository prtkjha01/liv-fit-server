import { Request, Response } from "express";
import sleepService from "../services/sleep.service";
import { User } from "../interfaces/userInterface";
// Create User Sleep Record
export const createSleepRecord = (req: User, res: Response) => {
  return sleepService.createSleepRecord(req, res);
};
//Fetch User Sleep Record
export const getSleepRecord = (req: User, res: Response) => {
  return sleepService.getSleepRecord(req, res);
};
//Update User Sleep Record
export const updateSleepRecord = (req: User, res: Response) => {
  return sleepService.updateSleepRecord(req, res);
};
//Delete User Sleep Record
export const deleteSleepRecord = (req: User, res: Response) => {
  return sleepService.deleteSleepRecord(req, res);
};
