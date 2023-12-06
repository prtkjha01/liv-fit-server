import { Request, Response } from "express";
import statsService from "../services/stats.service";
import { User } from "../interfaces/userInterface";
// Create User Stats
export const createStats = (req: User, res: Response) => {
  return statsService.createStats(req, res);
};
//Fetch User Stats
export const getStats = (req: User, res: Response) => {
  return statsService.getStats(req, res);
};
//Update User Stats
export const updateStats = (req: User, res: Response) => {
  return statsService.updateStats(req, res);
};
//Delete User Stats
export const deleteStats = (req: User, res: Response) => {
  return statsService.deleteStats(req, res);
};
